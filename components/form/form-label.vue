<script lang="ts" setup>
  import { Label } from '@/components/label';
  import { useFormField } from './form-fields';

  import type { HTMLAttributes } from 'vue';
  import type { LabelProps } from 'radix-vue';

  const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>();

  const { error, formItemId } = useFormField();
</script>

<template>
  <Label :class="cn(error && 'font-semibold', props.class)" :for="formItemId">
    <slot />
  </Label>
</template>
