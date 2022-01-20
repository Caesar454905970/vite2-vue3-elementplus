//从VueRouter中导入需要的函数模块
import {createRouter, createWebHistory } from 'vue-router'
// 导入 HelloWorld.vue 组件
const routes = [
    { path: '/', component: () => import('../Layout/Layout.vue'),
        children:[
            { path: 'home', component: () => import('../views/Home.vue')},
        ]}
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

//导出router
export default router
