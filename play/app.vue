<template>
  测试
  <Icon color="blue" :size="20" class="w-icon-delete">Hello Icon</Icon>
</template>
<script lang="ts">
import Icon from '@engine-ui/components/icon';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    Icon
  }
})

</script>