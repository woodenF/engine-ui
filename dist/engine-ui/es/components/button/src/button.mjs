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

export { ButtonSize, ButtonType, buttonEmits, buttonProps };
//# sourceMappingURL=button.mjs.map
