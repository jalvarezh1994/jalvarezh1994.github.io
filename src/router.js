import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import LessonBubble from './components/LessonBubble.vue';
import GoBack from './components/GoBack.vue';
import SideMenu from './components/SideMenu.vue';
import AccountButton from './components/AccountButton.vue';
import TextContent from './components/TextContent.vue';
import ImageContent from './components/ImageContent.vue';
import VideoContent from './components/VideoContent.vue';
import AnimationContent from './components/AnimationContent.vue';
import StarRating from 'vue-star-rating';
import SelectOne from './components/SelectOne.vue';

Vue.use(Router);
//General
Vue.component('SideMenu', SideMenu);
//Lesson
Vue.component('LessonBubble', LessonBubble);
Vue.component('GoBack', GoBack);
Vue.component('StarRating', StarRating);
Vue.component('AccountButton', AccountButton);
//Lesson Content
Vue.component('TextContent', TextContent);
Vue.component('ImageContent', ImageContent);
Vue.component('VideoContent', VideoContent);
Vue.component('AnimationContent', AnimationContent);
//Excercises
Vue.component('SelectOne', SelectOne);
Vue.prototype.$linkClickDelay = 50;

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/mainMenu',
      name: 'mainMenu',
      component: () => import('./views/MainMenu.vue')
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: () => import('./views/LessonsMenu.vue')
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: () => import('./views/Lesson.vue')
    },
    {
      path: '/lessonPage',
      name: 'lessonPage',
      component: () => import('./views/LessonPage.vue')
    },
    {
      path: '/lessonExcercise',
      name: 'lessonExcercise',
      component: () => import('./views/LessonExcercise.vue')
    },
    {
      path: '/lessonResult',
      name: 'lessonResult',
      component: () => import('./views/LessonResult.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
  ]
})
