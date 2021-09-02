import { createApp } from 'vue' // Vue 3.x 引入 vue 的形式
import App from './App.vue' // 引入 APP 页面组建
import {router} from './router'
console.log('process.env', process.env);


createApp(App).use(router).mount('#app')

