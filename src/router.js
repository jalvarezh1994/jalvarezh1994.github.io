import Vue from 'vue';
import Router from 'vue-router';
import MainMenu from './views/MainMenu.vue';
import LessonBubble from './components/LessonBubble.vue';
import GoBack from './components/GoBack.vue';
import AccountButton from './components/AccountButton.vue';
import TextContent from './components/TextContent.vue';
import ImageContent from './components/ImageContent.vue';
import VideoContent from './components/VideoContent.vue';
import AnimationContent from './components/AnimationContent.vue';
import StarRating from 'vue-star-rating';

Vue.use(Router);
Vue.component('LessonBubble', LessonBubble);
Vue.component('GoBack', GoBack);
Vue.component('StarRating', StarRating);
Vue.component('AccountButton', AccountButton);
//Lesson Content
Vue.component('TextContent', TextContent);
Vue.component('ImageContent', ImageContent);
Vue.component('VideoContent', VideoContent);
Vue.component('AnimationContent', AnimationContent);

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
    }
  ]
})
