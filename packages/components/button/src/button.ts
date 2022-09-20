import { ExtractPropTypes } from 'vue';

export const ButtonType = [
  'default',
  'primary',
  'success',
  'info',
  'warning',
  'error'
];

export const ButtonSize = [
  'large',
  'medium',
  'small',
  'tiny',
  'mini'
];

export const buttonProps = {
  type: {
    type: String,
    values: ButtonType
  },
  size: {
    type: String,
    values: ButtonSize
  }
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
