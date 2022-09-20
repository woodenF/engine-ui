import { ExtractPropTypes } from 'vue';
import { buttonProps } from './button';
import type buttonGroup from './button-group.vue';

export const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
};

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;

export type ButtonGroupInstance = InstanceType<typeof buttonGroup>;
