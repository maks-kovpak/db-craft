<script lang="ts" setup>
  import { AvatarImage } from 'radix-vue';
  import type { AvatarImageProps } from 'radix-vue';

  const props = defineProps<AvatarImageProps>();
</script>

<template>
  <AvatarImage v-bind="props" class="h-full w-full object-cover" />
</template>
