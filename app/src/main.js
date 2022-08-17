import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./index.css";

const app = createApp(App);

if (localStorage.getItem("darkmode") == "true") {
  console.log("darkmode");
  document.querySelector("html").classList.add("dark");
}

app.use(router);

app.mount("#app");
