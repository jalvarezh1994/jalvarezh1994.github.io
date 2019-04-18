<template>
  <div class="page bg-blue full-height">
    <SideMenu/>
    <div class="col wrapper-height animated fadeInRight">
      <div class="row row-start-align">
        <div class="col full-width">
          <div class="header-spacer"></div>
          <div class="row full-width"></div>
        </div>
      </div>
      <div class="row">
        <div class="col wrapper-height full-width">
          <div class="row row-center row-center-align full-width">
            <div
              @click="goToLessonPage"
              class="btn rounded-border margin-centered hover-pressed"
              type="submit"
            >
              <span class="text btn-text">CONTENIDO</span>
            </div>
          </div>
          <div class="row row-center row-center-align full-width">
            <div
              @click="goToLessonExcercise"
              class="btn rounded-border margin-centered hover-pressed"
              type="submit"
            >
              <span class="text btn-text">EJERCICIOS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer"></footer>
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
      }, this.$linkClickDelay);
    },
    goToLessonExcercise() {
      setTimeout(() => {
        this.$router.push("/lessonExcercise");
      }, this.$linkClickDelay);
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper-height {
  height: 100%;
  justify-content: space-evenly;
}
.row {
  height: 50%;
  align-items: center;
}
.btn-text {
  display: flex;
  width: 100%;
  height: 100% !important;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: white;
}
.rounded-border {
  border-radius: 50px;
}
.btn {
  width: 80%;
  height: 60%;
  background: linear-gradient(to right, #262262 0%, #662d91 100%);
  border: 3px solid rgba(255, 255, 255, 0);
  border-left: #262262 solid;
  border-right: #662d91 solid;
}
.btn span {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  font-size: 1.5rem;
}
.btn-text {
  display: flex;
  width: 100%;
  height: 100% !important;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: white;
}
</style>
