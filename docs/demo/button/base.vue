<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const test = ref(1235);
    return {
      test
    };
  }
});
</script>

<template>
  <div>
    <Button type="default">
      普通按钮
    </Button>
    <Button type="warning">
      绿色按钮
    </Button>
  </div>
</template>
