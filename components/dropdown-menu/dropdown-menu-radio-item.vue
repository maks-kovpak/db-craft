<script setup lang="ts">
  import {
    DropdownMenuItemIndicator,
    DropdownMenuRadioItem,
    useForwardPropsEmits,
  } from 'radix-vue';

  import type { HTMLAttributes } from 'vue';
  import type { DropdownMenuRadioItemEmits, DropdownMenuRadioItemProps } from 'radix-vue';

  const props = defineProps<DropdownMenuRadioItemProps & { class?: HTMLAttributes['class'] }>();
  const emits = defineEmits<DropdownMenuRadioItemEmits>();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
  });

  const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class
      )
    "
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Icon name="lucide:circle" size="0.5rem" class="h-2 w-2 fill-current" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
