// 前者创建路由实例，后者让vue-router使用内存历史记录模式让历史记录更干净
import { createRouter, createMemoryHistory } from "vue-router";
import Home from '../views/Home.vue'
import BooksShelf from "../components/BooksShelf.vue";

// component的意思是组件，此处定义路由规则
const routes = [
    { path: '/',
      name: 'Home', 
      component: Home,
      meta: { index: 0 }
    },
    { path: '/booksshelf',
      name: 'BooksShelf',
      component: BooksShelf,
      meta: { index: 1 }
    },
]

// 把前面创建的router数组导出
// createRouter({...})：Vue Router 4 的 API，用于创建路由实例。
// history: createWebHistory()：指定路由模式，使用 HTML5 的 history API，适合现代 Web 应用而不是哈希模式。
// routes：路由数组，定义路径与组件的映射关系
export const router = createRouter({
    history: createMemoryHistory(),
    routes
});