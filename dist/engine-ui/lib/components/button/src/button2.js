'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const _hoisted_1 = { class: "en-button is-active is-round" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "button",
  setup(__props) {
    defineOptions({
      name: "Button"
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", _hoisted_1, [
        vue.renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
var button = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "D:\\Code\\Local\\Vue-TypeScript\\engine-ui\\packages\\components\\button\\src\\button.vue"]]);

exports["default"] = button;
//# sourceMappingURL=button2.js.map
