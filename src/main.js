import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./assets/css/gloable.css" //引入全局样式

const app =createApp(App)
app.use(router)
    .use(ElementPlus)
    .mount('#app')
