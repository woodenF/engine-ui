/*! EngineUI v1.0.20 */

import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, renderSlot } from 'vue';

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

const _sfc_main = defineComponent({
  name: "Icon",
  props: iconProps,
  setup(props) {
    const style = computed(() => {
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
  return openBlock(), createElementBlock("i", {
    class: "w-icon",
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}
var icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "icon.vue"]]);

const Icon = withInstall(icon);

var index = {
  install() {
  }
};

export { Icon, index as default };
