/*! EngineUI v1.0.20 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.EngineUI = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  const withInstall = (comp) => {
    comp.install = (app) => {
      app.component(comp.name, comp);
    };
    return comp;
  };

  const iconProps = {
    size: {
      type: Number
    },
    color: {
      type: String
    }
  };

  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  const _sfc_main = vue.defineComponent({
    name: "Icon",
    props: iconProps,
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
  var icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "icon.vue"]]);

  const Icon = withInstall(icon);

  var index = {
    install() {
    }
  };

  exports.Icon = Icon;
  exports["default"] = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
