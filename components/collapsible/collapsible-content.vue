<script lang="ts" setup>
  import { CollapsibleContent } from 'radix-vue';
  import type { CollapsibleContentProps } from 'radix-vue';

  const props = defineProps<CollapsibleContentProps>();
</script>

<template>
  <CollapsibleContent
    v-bind="props"
    class="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden transition-all"
  >
    <slot />
  </CollapsibleContent>
</template>
