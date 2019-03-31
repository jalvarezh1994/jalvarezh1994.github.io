<template>
  <div class="page bg-blue full-height">
    <div class="wrapper full-height">
      <div style="height:25%"></div>
      <button class="btn lesson-button" style="height:25%" @click="goToLessonPage">Contenido</button>
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
    goToLessonPage() {
      this.$store.commit("setPageId", "0");
      setTimeout(() => {
        this.$router.push("/lessonPage");
      }, 150);
    },
    goToLessonExcercise() {
      setTimeout(() => {
        this.$router.push("/lessonExcercise");
      }, 150);
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

