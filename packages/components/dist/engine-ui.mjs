import { defineComponent, createVNode, createTextVNode } from "vue";
const buttonProps = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "large"
  }
};
const __uno = "";
const button = defineComponent({
  name: "Button",
  props: buttonProps,
  setup(props, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
          py-2
          px-4
          bg-pink-500
          m-1
          hover:bg-gray-500
        `
    }, [props.size, createTextVNode(" "), props.type]);
  }
});
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const Button = withInstall(button);
export {
  Button
};
//# sourceMappingURL=engine-ui.mjs.map
