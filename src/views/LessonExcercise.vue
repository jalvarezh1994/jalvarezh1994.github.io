<template>
  <div class="page bg-blue">
    <div v-if="isSelectOne(excercise)">
      <SelectOne
        v-bind:question="excercise.excerciseObject.question"
        v-bind:answers="excercise.excerciseObject.answers"
        v-on:success="addSuccess"
        v-on:failure="addFailure"
      />
    </div>
  </div>
</template>

<script>
import SelectOne from "../components/SelectOne.vue";
export default {
  name: "LessonExcercise",
  data: function() {
    return {
      excercise: {},
      excercisesLength: 0,
      failures: 0,
      succeses: 0
    };
  },
  created: function() {
    const topics = this.$store.getters.getTopics;
    const topic = topics.find(
      v => v.topicId === this.$store.getters.getTopicId
    );
    const lesson = topic.lessons.find(
      v => v.lessonId === this.$store.getters.getLessonId
    );
    const excercises = lesson.excercises;
    this.excercisesLength = excercises.length;
    const randomNumber = Math.floor(Math.random(excercises.length));
    const excercise = excercises[randomNumber];
    this.excercise = excercise;
  },
  methods: {
    isSelectOne(excercise) {
      const returnValue = excercise.excerciseType === "SelectOne";
      return returnValue;
    },
    addFailure() {
      this.failures += 1;
      const total = this.failures + this.succeses;
      if (total === this.excercisesLength) {
        this.$store.commit("setLessonSuccess", this.succeses);
        this.$store.commit("setLessonFail", this.failures);
        this.$store.commit("setLessonTotal", this.excercisesLength);
        this.$router.push("/lessonResult");
      }
    },
    addSuccess() {
      this.succeses += 1;
      const total = this.failures + this.succeses;
      if (total === this.excercisesLength) {
        this.$store.commit("setLessonSuccess", this.succeses);
        this.$store.commit("setLessonFail", this.failures);
        this.$store.commit("setLessonTotal", this.excercisesLength);
        this.$router.push("/lessonResult");
      }
    }
  }
};
</script>

<style>
</style>
