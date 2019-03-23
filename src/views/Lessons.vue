<template>
  <div class="page bg-blue full-height">
    <div class="wrapper">
      <div class="container-fluid mb-2">
        <button class="btn no-border header-profile-logo no-padding">
          <img class="menu-logo-account" src="/logos/user-logo.svg" alt>
        </button>
      </div>
      <br>
      <!-- Topic -->
      <div v-for="topic in topics" class="topic-container">
        <button class="btn topic">{{topic.topicTitle}}</button>
        <div class="row" style="flex-wrap: wrap">
          <!-- Lesson -->
          <LessonBubble v-for="(lesson, index) in topic.lessons" v-bind:lesson="lesson" v-bind:index="index"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LessonBubble from "../components/LessonBubble.vue";
export default {
  name: "mainMenu",
  data: function() {
    return {
      topics: [
        {
          topicTitle: "HTML",
          lessons: [
            {
              lessonTitle: "Etiquetas",
              lessonScore: 3
            },
            {
              lessonTitle: "Etiquetas",
              lessonScore: 3
            },
            {
              lessonTitle: "Etiquetas",
              lessonScore: 3
            },
            {
              lessonTitle: "Etiquetas",
              lessonScore: 3
            },
            {
              lessonTitle: "Etiquetas",
              lessonScore: 3
            },
            {
              lessonTitle: "Etiquetas",
              lessonScore: 3
            },
            {
              lessonTitle: "Atributos",
              lessonScore: 2
            }
          ]
        }
      ]
    };
  },
  methods: {
    getLessons(lessons) {
      const leftLessons = [];
      const rightLessons = [];
      for (let i = 0; i < this.lessons.length; i++) {
        const element = this.lessons[i];
        if (i % 2 === 0) {
          leftLessons.push(element);
        } else {
          rightLessons.push(element);
        }
      }
      const formattedLessons = {
        leftLessons: leftLessons,
        rightLessons: rightLessons
      };
      return formattedLessons;
    }
  }
};
</script>

<style lang="scss" scoped>
.lesson {
  border-radius: 100%;
  height: 8rem;
  width: 8rem;
}
.diag-left {
  height: 2.5rem;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M0 99 L99 0 L100 1 L1 100' fill='white' /></svg>");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%, auto;
}
.diag-right {
  height: 2.5rem;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M1 0 L0 1 L99 100 L100 99' fill='white' /></svg>");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%, auto;
}
.topic-container {
  margin-bottom: 2rem;
}
.topic {
  height: 2rem !important;
}
.header-profile-logo {
  width: 3rem;
  height: 3rem;
}
.bg-blue {
  background-color: #165a6b !important;
}
.mb-1 {
  margin-bottom: 1rem;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;
}
.half-height {
  height: 50%;
}
.width-80 {
  width: 80%;
}
.rounded-white-border {
  border-radius: 100%;
  border: solid white 0.2rem;
}
.menu-logo-account {
  height: 100%;
  width: 100%;
}
.menu-logo-center {
  width: 3rem;
  align-self: center;
}
.menu-logo-left {
  width: 3rem;
}
.menu-logo-lessons {
  width: 4.5rem;
  align-self: center;
}
.no-border {
  border: 0px;
}
.h-4 {
  height: 5.5rem;
  line-height: 4.5rem;
}
.h-4-3 {
  height: 4.5rem;
  line-height: 4.3rem;
}
.center-xy {
  justify-content: center;
  align-items: center;
}
.mr-1 {
  margin-right: 1rem;
}
.p-1 {
  padding: 1rem;
}
.font-small {
  font-size: 0.9rem;
}
.menu-logo-stats {
  height: 1.8rem;
}
.center-xy {
  overflow-y: hidden;
}
.menu-logo-games {
  width: auto;
  height: 2.5rem;
}
.mb-2 {
  margin-bottom: 1rem;
}
@media (min-height: 600px) {
  .mb-2 {
    margin-bottom: 2rem;
  }
}
.no-padding {
  padding: 0;
}
</style>
