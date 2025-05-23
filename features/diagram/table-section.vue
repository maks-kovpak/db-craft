<script lang="ts" generic="T extends DatabaseType" setup>
  import { v4 as uuidv4 } from 'uuid';
  import { useEventListener } from '@vueuse/core';
  import { useSortable } from '@vueuse/integrations/useSortable';
  import { DEFAULT_COLORS } from '@/lib/constants/colors';
  import { DATABASE_FIELD_TYPES } from '@/lib/constants/diagram';

  import type { Table, TableField } from '@/types/diagram';
  import type { DatabaseType } from '@/lib/constants/diagram';

  const props = defineProps<{
    table: Table<T>;
    searchQuery: string;
  }>();

  const { t } = useI18n();

  // Update table fields
  const currentProject = useCurrentProject();
  const fields = ref<TableField<T>[]>([]);

  watchEffect(() => {
    fields.value = props.table.fields;
  });

  watch(fields, () => currentProject.updateTableData(props.table.id, { fields: fields.value }), {
    deep: true,
  });

  // Make a column list sortable
  const columnsContainerRef = useTemplateRef<HTMLElement>('columnsContainerRef');
  const isDragging = ref(false);

  useSortable(columnsContainerRef, fields, {
    handle: '.sortable-handle',
    animation: 150,
    forceFallback: true,
    onStart: () => (isDragging.value = true),
    onEnd: () => (isDragging.value = false),
    onMove: (event) => {
      return !event.related.classList.contains('collapsible-footer');
    },
  });

  // Change table color
  const color = ref<string>(props.table.color ?? DEFAULT_COLORS[0]);

  watch(color, () => {
    if (!color.value) return;
    currentProject.updateTableData(props.table.id, { color: color.value });
  });

  // Add a new field
  const addField = () => {
    if (!currentProject.state) return;

    currentProject.updateTableData(props.table.id, {
      fields: [
        ...props.table.fields,
        {
          id: uuidv4(),
          name: `field_${props.table.fields.length + 1}`,
          type: DATABASE_FIELD_TYPES[currentProject.state.type][0],
        },
      ],
    });
  };

  // Scroll to the selected table section
  const selectedTable = useSelectedTable();
  const sectionRef = useTemplateRef('sectionRef');

  watch(
    () => [selectedTable.id, selectedTable.flag],
    () => {
      nextTick(() => {
        if (selectedTable.id === props.table.id) {
          sectionRef.value?.$el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  );

  useEventListener(window, 'mouseup', () => {
    if (!selectedTable.id) return;
    selectedTable.setId(null);
  });
</script>

<template>
  <AccordionItem
    ref="sectionRef"
    :value="table.id"
    :class="[
      'mb-2 w-full overflow-hidden rounded-md border-[1px] border-gray-500 bg-white',
      !includesIgnoreCase(table.name, searchQuery) && 'hidden',
      selectedTable.id === table.id && 'ring-2 ring-rose-600 ring-offset-2',
    ]"
  >
    <AccordionTrigger
      class="table-section-header group flex w-full items-center justify-between gap-2 p-2 text-sm font-medium data-[state=closed]:rounded-md"
      :style="{ backgroundColor: table.color }"
    >
      <DiagramTableActions :table :search-query />
    </AccordionTrigger>

    <AccordionContent ref="columnsContainerRef" class="py-2">
      <div
        v-for="column in fields"
        :key="column.id"
        class="column-item transition-color flex items-center justify-between gap-2 p-3 py-1 pl-1"
        :data-dragging="isDragging"
      >
        <Icon
          name="clarity:drag-handle-line"
          size="1.5rem"
          class="sortable-handle h-6 w-6 flex-shrink-0 cursor-move"
        />
        <Input
          v-model="column.name"
          :name="`${table.name}:${column.name}`"
          autocomplete="off"
          class="h-7 flex-1 p-1.5 text-xs"
        />

        <DiagramFieldTypeSelector v-model="column.type" />
        <DiagramTableFieldOptions :table-id="table.id" :field="column" />
      </div>

      <div class="collapsible-footer">
        <Separator class="my-2" />
        <div class="flex items-center justify-between px-2">
          <DiagramColorPicker v-model="color" />
          <Button
            size="xs"
            variant="secondary"
            class="flex items-center gap-1 text-[12px]"
            @click="addField"
          >
            <Icon name="lucide:plus" size="1rem" class="h-4 w-4" />
            {{ t('ADD_FIELD') }}
          </Button>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</template>

<style scoped>
  .column-item.sortable-chosen,
  .column-item[data-dragging='false']:hover {
    background-color: rgba(203, 213, 225, 0.5); /* bg-slate-300/50 */
  }

  .sortable-ghost {
    opacity: 0;
  }
</style>
