var SmartyUI = function(exports, vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("button", null, "SFC Button");
  }
  const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const JSXButton = vue.defineComponent({
    name: "JSXButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("JSX Button")]);
    }
  });
  const buildEntry = {
    install(app) {
      app.component("SFCButton", SFCButton);
      app.component(JSXButton.name, JSXButton);
    }
  };
  exports.JSXButton = JSXButton;
  exports.SFCButton = SFCButton;
  exports.default = buildEntry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
