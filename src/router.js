import Vue from 'vue'
import Router from 'vue-router'
import mainMenu from './views/mainMenu.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: mainMenu
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/mainMenu.vue')
    },
    {
      path: '/syntaxOrder',
      name: 'syntaxOrder',
      component: () => import('./components/syntaxOrder.vue')
    }
  ]
})
