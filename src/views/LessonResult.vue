<template>
  <div class="page bg-blue">
    <div class="wrapper animated fadeInRight" style="height:100%">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <span class="text" style="font-size:3rem">Correctas</span>
      <br>
      <span class="text" style="font-size:3rem">{{successes}}</span>
      <br>
      <span class="text" style="font-size:3rem">Incorrectas</span>
      <br>
      <span class="text" style="font-size:3rem">{{failures}}</span>
      <br>
      <StarRating
        v-bind:star-size="starRatingProps.starSize"
        v-bind:show-rating="starRatingProps.showRating"
        v-bind:max-rating="starRatingProps.maxRating"
        v-bind:read-only="starRatingProps.readOnly"
        v-bind:rounded-corners="starRatingProps.roundedCorners"
        v-bind:rating="getRating()"
        active-color="#ffc65a"
        border-color="#00"
        class="my-stars"
      />
      <button class="btn" style="height:2rem; margin:1rem" @click="goToHome">Regresar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import querystring from "querystring";
export default {
  name: "LessonResult",
  data: function() {
    return {
      successes: 0,
      failures: 0,
      starRatingProps: {
        starSize: 70,
        showRating: false,
        maxRating: 3,
        readOnly: true,
        roundedCorners: true
      }
    };
  },
  created: function() {
    this.successes = this.$store.getters.getLessonSuccess;
    this.failures = this.$store.getters.getLessonFail;
  },
  methods: {
    getRating() {
      const succeses = this.$store.getters.getLessonSuccess;
      const failures = this.$store.getters.getLessonFail;
      const returnValue = Math.floor(
        parseFloat(succeses / (succeses + failures)) * 3
      );
      const topics = this.$store.getters.getTopics;
      const topic = topics.find(v => {
        return v.topicId === this.$store.getters.getTopicId;
      });
      const lesson = topic.lessons.find(v => {
        return this.$store.getters.getLessonId === v.lessonId;
      });
      const scores = window.localStorage.getItem("scores");
      if (scores && scores !== "undefined" && scores !== "null") {
        const currentScoresString = window.localStorage.getItem("scores");
        const scores = JSON.parse(currentScoresString);
        const newScores = scores.filter(v => {
          return v.lessonId !== lesson.lessonId;
        });
        const saveObject = { lessonId: lesson.lessonId, score: returnValue };
        newScores.push(saveObject);
        axios.post(
          "http://172.16.28.180:3000/lesson/user/score",
          querystring.stringify({
            userId: window.localStorage.getItem("userId"),
            lessonId: lesson.lessonId,
            subjectId: 1,
            score: returnValue
          })
        );
        window.localStorage.setItem("scores", JSON.stringify(newScores));
      } else {
        const saveObject = [{ lessonId: lesson.lessonId, score: returnValue }];
        axios.post(
          "http://172.16.28.180:3000/lesson/user/score",
          querystring.stringify({
            userId: window.localStorage.getItem("userId"),
            lessonId: lesson.lessonId,
            subjectId: 1,
            score: returnValue
          })
        );
        window.localStorage.setItem("scores", JSON.stringify(saveObject));
      }
      return returnValue;
    },
    goToHome() {
      setTimeout(() => {
        this.$router.push("/mainMenu");
      }, 150);
    },
    score() {}
  }
};
</script>

<style scoped>
.text {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
