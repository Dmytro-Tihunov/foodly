import { createApp } from 'vue'
import 'reset-css'
import './assets/scss/main.scss'
import App from './App.vue'
import router from "./router/index.js";

createApp(App).use(router).mount('#app')