<script lang="ts" setup>
  import { PopoverTrigger } from 'radix-vue';
  import type { PopoverTriggerProps } from 'radix-vue';

  const props = defineProps<PopoverTriggerProps>();
</script>

<template>
  <PopoverTrigger v-bind="props">
    <slot />
  </PopoverTrigger>
</template>
