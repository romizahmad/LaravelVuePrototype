require("./bootstrap");

import { createApp } from "vue";

import router from "./router";
import Axios from "axios";

import App from "./App.vue";

Axios.defaults.baseURL = "http://localhost:8000/api";

const app = createApp(App);

app.use(router);

app.mount("#app");
