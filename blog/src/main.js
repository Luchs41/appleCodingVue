import { createApp } from 'vue'
import App from './App.vue'
import 라우터만든거 from './router.js'
import './registerServiceWorker'

createApp(App).use(라우터만든거).mount('#app')
