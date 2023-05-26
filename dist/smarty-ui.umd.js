(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.SmartyUI = {}, global.Vue));
})(this, function(exports2, vue) {
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
  exports2.JSXButton = JSXButton;
  exports2.SFCButton = SFCButton;
  exports2.default = buildEntry;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
