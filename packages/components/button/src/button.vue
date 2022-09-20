<script lang="ts" setup>
import { buttonGroupContextKey } from '@engine-ui/tokens';
import { computed } from 'vue';
import { inject } from 'vue';
import { buttonProps } from './button';

defineOptions({
  name: 'Button'
});

const buttonGroupContext = inject(buttonGroupContextKey, undefined);

const props = defineProps(buttonProps);

const type = computed(() => props.type || buttonGroupContext?.type || 'default');
const size = computed(() => props.size || buttonGroupContext?.size || 'medium');
</script>

<template>
  <button
    class="en-button"
    :class="[
      `en-button--${type}`,
      `en-button--${size}`
    ]"
  >
    <slot></slot>
  </button>
</template>
