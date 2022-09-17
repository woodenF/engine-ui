<script lang="ts" setup>
import { ButtonProps } from './button';

defineOptions({
  name: 'Button'
});

const props = defineProps<ButtonProps>();

</script>

<template>
  <button
    :class="[
      `en-${props.type}`,
      `en-${props.size}`
    ]"
  >
    <slot></slot>
  </button>
</template>
