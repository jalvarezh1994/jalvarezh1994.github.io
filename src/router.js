import Vue from 'vue';
import Router from 'vue-router';
import MainMenu from './views/MainMenu.vue';
import LessonBubble from './components/LessonBubble.vue';

Vue.use(Router);
Vue.component('LessonBubble', LessonBubble);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainMenu',
      component: MainMenu
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: () => import('./views/Lessons.vue')
    }
  ]
})
