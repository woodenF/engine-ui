import { defineComponent, createVNode, createTextVNode } from "vue";
import { buttonProps } from "../types.js";
/* empty css                                */const button = defineComponent({
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
export {
  button as default
};
//# sourceMappingURL=button.js.map
