<script lang="ts" generic="T extends DatabaseType" setup>
  import { Position, Handle } from '@vue-flow/core';

  import type { NodeProps } from '@vue-flow/core';
  import type { Table } from '@/types/diagram';
  import type { DatabaseType } from '@/lib/constants/diagram';

  const props = defineProps<NodeProps<Table<T>>>();

  const emit = defineEmits<{
    (e: 'update-node-internals', id: string): void;
  }>();

  watch(
    () => props.data.fields,
    () => nextTick(() => emit('update-node-internals', props.id)),
    { immediate: true, deep: true }
  );
</script>

<template>
  <div
    class="w-52 rounded-md border-[1px] border-solid border-slate-800 bg-white font-mono text-xs"
    :style="{ fontFamily: 'JetBrains Mono, monospace' }"
  >
    <div
      class="rounded-t-md border-b-[1px] border-solid border-slate-800 p-2 text-sm font-semibold"
      :style="{ backgroundColor: data.color }"
    >
      {{ data.name }}
    </div>
    <div
      v-for="field in data.fields"
      :key="field.id"
      class="field-row relative cursor-pointer border-solid border-slate-800 px-2 py-1 [&:not(:last-child)]:border-b-[1px]"
    >
      <Handle
        :id="`source-${data.id}-${field.id}`"
        :position="Position.Left"
        type="source"
        class="field-row-handle"
      />
      <div class="flex items-center justify-between">
        <span class="max-w-[50%] truncate" :title="field.name">{{ field.name }}</span>
        <span class="text-gray-500">{{ field.type }}</span>
      </div>
      <Handle
        :id="`target-${data.id}-${field.id}`"
        :position="Position.Right"
        type="target"
        class="field-row-handle"
      />
    </div>
  </div>
</template>

<style scoped>
  .field-row .field-row-handle {
    opacity: 0;
  }

  .field-row:hover .field-row-handle {
    opacity: 1;
  }
</style>
