<script lang="ts" setup>
  import { DropdownMenuItem, useForwardProps } from 'radix-vue';

  import type { HTMLAttributes } from 'vue';
  import type { DropdownMenuItemProps } from 'radix-vue';

  const props = defineProps<
    DropdownMenuItemProps & { class?: HTMLAttributes['class']; inset?: boolean }
  >();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
  });

  const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="
      cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
        inset && 'pl-8',
        props.class
      )
    "
  >
    <slot />
  </DropdownMenuItem>
</template>
