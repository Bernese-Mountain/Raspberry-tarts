import { createApp } from "vue";
import SFCButton from "@/components/SFCButton.vue";
import JSXButton from "@/components/JSXButton";
import UnoCssButton from "@/components/UnoButton/Uno.vue";
import "uno.css";

// createApp({
//     components: {
//       SFCButton,
//       JSXButton
//     },
//     JSXButton
//   }).mount('#app');
createApp(
  UnoCssButton
).mount('#app');