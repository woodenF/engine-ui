import { defineComponent, openBlock, createElementBlock, renderSlot } from 'vue';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const _hoisted_1 = { class: "en-button is-active is-round" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "button",
  setup(__props) {
    defineOptions({
      name: "Button"
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
var button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:\\Code\\Local\\Vue-TypeScript\\engine-ui\\packages\\components\\button\\src\\button.vue"]]);

export { button as default };
//# sourceMappingURL=button2.mjs.map
