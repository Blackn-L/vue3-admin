import { createApp } from 'vue'
import App from './App.vue'
import { ElButton } from 'element-plus';
import router from '@/router'

import 'element-plus/lib/theme-chalk/index.css';


createApp(App).use(ElButton).use(router).mount('#app')
