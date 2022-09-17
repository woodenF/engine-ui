<script lang="ts" setup>
import { buttonProps } from './button';

defineOptions({
  name: 'Button'
});

const props = defineProps(buttonProps);
</script>

<template>
  <button
    :class="[
      `en-button-${props.type}`,
      `en-button-${props.size}`
    ]"
  >
    <slot></slot>
  </button>
</template>
