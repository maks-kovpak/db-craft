<script lang="ts" setup>
  import { ComboboxEmpty } from 'radix-vue';

  import type { HTMLAttributes } from 'vue';
  import type { ComboboxEmptyProps } from 'radix-vue';

  const props = defineProps<ComboboxEmptyProps & { class?: HTMLAttributes['class'] }>();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
  });
</script>

<template>
  <ComboboxEmpty v-bind="delegatedProps" :class="cn('py-6 text-center text-sm', props.class)">
    <slot />
  </ComboboxEmpty>
</template>
