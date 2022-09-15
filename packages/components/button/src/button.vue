<script lang="ts" setup>

defineOptions({
  name: 'Button'
})


</script>
<template>
  <button
    class="en-button is-active is-round"
  >
    <slot></slot>
  </button>
</template>
