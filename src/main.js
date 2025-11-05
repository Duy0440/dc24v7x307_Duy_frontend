import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 🔹 thêm dòng này

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

// 🔹 Đoạn trong hình hướng dẫn:
createApp(App).use(router).mount("#app");

// 🔹 Nếu bạn muốn theo cách tách biến app (vẫn đúng):
// const app = createApp(App);
// app.use(router);
// app.mount("#app");
