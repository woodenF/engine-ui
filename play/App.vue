<script lang="ts" setup>
import Button from '@engine-ui/components/button/src/button.vue';

</script>

<template>
  <div>
    <div>
      <Button
        type="default"
      >
        默认按钮
      </Button>
      <Button
        type="primary"
      >
        主要按钮
      </Button>
      <Button
        type="success"
      >
        成功按钮
      </Button>
      <Button
        type="info"
      >
        Info按钮
      </Button>
      <Button
        type="warning"
      >
        警告按钮
      </Button>
      <Button
        type="danger"
      >
        危险按钮
      </Button>
    </div>
    <div>
      <Button size="mini">
        mini
      </Button>
      <Button size="small">
        small
      </Button>
      <Button size="normal">
        normal
      </Button>
      <Button size="large">
        large
      </Button>
    </div>
  </div>
</template>
