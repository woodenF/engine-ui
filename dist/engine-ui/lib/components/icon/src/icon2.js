'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var icon$1 = require('./icon.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const _sfc_main = vue.defineComponent({
  name: "Icon",
  props: icon$1.iconProps,
  setup(props) {
    const style = vue.computed(() => {
      if (!props.size && !props.color) {
        return {};
      }
      return {
        ...props.size ? { "font-size": props.size + "px" } : {},
        ...props.color ? { "color": props.color } : {}
      };
    });
    return { style };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("i", {
    class: "w-icon",
    style: vue.normalizeStyle(_ctx.style)
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 4);
}
var icon = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "D:\\Code\\Local\\Vue-TypeScript\\engine-ui\\packages\\components\\icon\\src\\icon.vue"]]);

exports["default"] = icon;
//# sourceMappingURL=icon2.js.map
