<script lang="ts" setup>
  import { AccordionRoot, useForwardPropsEmits } from 'radix-vue';
  import type { AccordionRootEmits, AccordionRootProps } from 'radix-vue';

  const props = defineProps<AccordionRootProps>();
  const emits = defineEmits<AccordionRootEmits>();

  const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <AccordionRoot v-bind="forwarded">
    <slot />
  </AccordionRoot>
</template>
