import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, renderSlot } from 'vue';
import { iconProps } from './icon2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

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
var icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:\\Code\\Local\\Vue-TypeScript\\engine-ui\\packages\\components\\icon\\src\\icon.vue"]]);

export { icon as default };
//# sourceMappingURL=icon.mjs.map
