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
      `en-${props.type}`,
      `en-${props.size}`
    ]"
  >
    <slot></slot>
  </button>
</template>
