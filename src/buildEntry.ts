import { App } from "vue";
import SFCButton from "./components/SFCButton.vue";
import JSXButton from "./components/JSXButton";

// 导出单独组件
export { SFCButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component('SFCButton', SFCButton);
    app.component(JSXButton.name, JSXButton);
  },

};