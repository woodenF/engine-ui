'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const ButtonType = [
  "default",
  "primary",
  "success",
  "warning",
  "danger"
];
const ButtonSize = [
  "large",
  "normal",
  "small",
  "mini"
];
const buttonProps = {
  type: {
    type: String,
    values: ButtonType
  },
  size: {
    type: String,
    values: ButtonSize
  }
};
const buttonEmits = {
  click: (e) => e instanceof MouseEvent
};

exports.ButtonSize = ButtonSize;
exports.ButtonType = ButtonType;
exports.buttonEmits = buttonEmits;
exports.buttonProps = buttonProps;
//# sourceMappingURL=button.js.map
