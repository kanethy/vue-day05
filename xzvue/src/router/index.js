import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//因为首屏暂时用不到about页面，所以不要过早引入
//如果不引入，打包时，就不会将about页面内容打包入app.js中
//import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  //{path:"/about",component:About}
  { //这里是懒加载，暂时不要问，明天讲
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
