<script lang="ts" setup>
import { Button, ButtonGroup } from '@engine-ui/components';
</script>

<template>
  <div>
    <ButtonGroup
      type="default"
      size="small"
    >
      <Button>
        Default
      </Button>
      <Button type="primary">
        Primary
      </Button>
      <Button type="success">
        Success
      </Button>
      <Button type="warning">
        Warning
      </Button>
      <Button type="error">
        Error
      </Button>
    </ButtonGroup>
  </div>
</template>
