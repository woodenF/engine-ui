import { ExtractPropTypes, PropType } from 'vue';

type ButtonType = 'default' | 'primary' | 'success' |'warning' | 'danger';
type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'large'
  }
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
