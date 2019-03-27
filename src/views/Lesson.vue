<template>
  <div class="page bg-blue full-height">
    <div class="wrapper full-height">
      <div style="height:25%"></div>
      <button class="btn lesson-button" style="height:25%" @click="goToLessonContent">Contenido</button>
      <button class="btn lesson-button" style="height:25%" @click="goToLessonExcercise">Ejercicios</button>
      <div style="height:25%"></div>
      <GoBack/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lesson",
  methods: {
    goToLessonContent() {
      this.$router.push("/lessonContent");
    },
    goToLessonExcercise() {
      this.$router.push("/lessonExcercise");
    }
  }
};
</script>

<style lang="scss" scoped>
.lesson-button {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
.page {
  overflow: hidden !important;
}
</style>

