<script lang="ts" setup>
  import type { HTMLAttributes } from 'vue';

  const props = defineProps<{
    class?: HTMLAttributes['class'];
  }>();
</script>

<template>
  <h3 :class="cn('text-2xl font-semibold leading-none tracking-tight', props.class)">
    <slot />
  </h3>
</template>
