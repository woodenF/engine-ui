<script lang="ts" setup>
import { provide, reactive, toRef } from 'vue';
import { buttonGroupProps } from './button-group';
import { buttonGroupContextKey } from '@engine-ui/tokens';

defineOptions({
  name: 'ButtonGroup'
});

const props = defineProps(buttonGroupProps);

provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type')
  })
);

</script>
<template>
  <div class="en-button-group">
    <slot></slot>
  </div>
</template>
