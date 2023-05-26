import { openBlock, createElementBlock, defineComponent, createVNode, createTextVNode } from "vue";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const buildEntry = {
  install(app) {
    app.component("SFCButton", SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  SFCButton,
  buildEntry as default
};
