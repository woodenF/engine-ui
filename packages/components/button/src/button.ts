import { ExtractPropTypes } from "vue";

export const ButtonType = [
  'default',
  'primary',
  'success',
  'warning',
  'danger'
];

export const ButtonSize = [
  'large',
  'normal',
  'small',
  'mini'
]

export const buttonProps = {
  type: {
    type: String,
    values: ButtonType
  },
  size: {
    type: String,
    values: ButtonSize
  }
}

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent
}

export type ButtonEmits = typeof buttonEmits;

export type buttonProps = ExtractPropTypes<typeof buttonProps>;