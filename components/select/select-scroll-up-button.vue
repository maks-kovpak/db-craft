<script lang="ts" setup>
  import { SelectScrollUpButton, useForwardProps } from 'radix-vue';

  import type { HTMLAttributes } from 'vue';
  import type { SelectScrollUpButtonProps } from 'radix-vue';

  const props = defineProps<SelectScrollUpButtonProps & { class?: HTMLAttributes['class'] }>();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
  });

  const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectScrollUpButton
    v-bind="forwardedProps"
    :class="cn('flex cursor-default items-center justify-center py-1', props.class)"
  >
    <slot>
      <Icon name="lucide:chevron-up" size="1rem" class="h-4 w-4" />
    </slot>
  </SelectScrollUpButton>
</template>
