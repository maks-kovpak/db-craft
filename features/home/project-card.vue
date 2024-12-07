<script lang="ts" setup>
  import type { Tables } from '@/types/database';

  const props = defineProps<{
    project: Tables<'projects'>;
  }>();

  const emit = defineEmits<{
    (e: 'delete', id: number): void;
    (e: 'duplicate', project: Tables<'projects'>): void;
  }>();
</script>

<template>
  <Card>
    <CardHeader class="pb-3">
      <div class="flex justify-between items-center">
        <CardTitle
          class="text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap"
          :title="props.project.name"
        >
          {{ props.project.name }}
        </CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="ghost" size="icon" class="w-7 h-7">
              <Icon name="lucide:more-vertical" size="1rem" />
              <span class="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem @click="emit('duplicate', props.project)">Duplicate</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem class="text-red-600" @click="emit('delete', props.project.id)">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardHeader>
    <CardContent class="pb-4">
      <NuxtImg
        :src="props.project.thumbnail ?? '/images/thumbnail-placeholder.png'"
        :alt="`Thumbnail for ${props.project.name}`"
        class="w-full h-auto object-cover rounded-md"
        style="aspect-ratio: 2 / 1"
        placeholder
      />
    </CardContent>
    <CardFooter class="flex justify-between items-center">
      <span
        class="text-sm text-gray-500"
        :title="formatDateAndTime(props.project.last_modified_at)"
      >
        Last modified: {{ formatDate(props.project.last_modified_at) }}
      </span>
      <Button variant="outline">
        <NuxtLink :to="`/project/${props.project.id}`">Open</NuxtLink>
      </Button>
    </CardFooter>
  </Card>
</template>
