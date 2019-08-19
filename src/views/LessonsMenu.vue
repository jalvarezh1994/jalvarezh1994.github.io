<template>
  <div class="page bg-blue full-height">
    <SideMenu/>
    <div class="header-spacer"></div>
    <div class="wrapper animated fadeInRight">
      <!-- Topic -->
      <div v-for="topic in topics" class="topic-container">
        <div class="col full-width">
          <div class="topic row row-center blue-purple-gradient-bg">{{topic.topicTitle}}</div>
        </div>
        <div class="row" style="flex-wrap: wrap">
          <!-- Lesson -->
          <LessonBubble
            v-for="(lesson, index) in topic.lessons"
            v-bind:lesson="lesson"
            v-bind:index="index"
            v-bind:topicId="topic.topicId"
          />
        </div>
      </div>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import GoBack from "../components/GoBack.vue";
import LessonBubble from "../components/LessonBubble.vue";
export default {
  name: "mainMenu",
  computed: {
    topics() {
      const returnValue = this.$store.getters.getTopics;
      return returnValue;
    }
  },
  data: function() {
    return {};
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

<style lang="less" scoped>
.topic {
  font-size: 1.4rem;
  color: white;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.topic-container {
  margin-bottom: 2rem;
  word-break: break-word;
}
</style>
