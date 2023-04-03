import { createApp } from "vue";
import "./assets/css/tailwind.css";
import "./assets/css/typography.css";
import App from "./App.vue";
import router from "./router/router";

import { createHead } from "unhead";
const head = createHead();

createApp(App).use(router).use(head).mount("#app");
