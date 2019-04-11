<template>
  <div class="page bg-white full-height">
    <div class="header"></div>
    <div class="header-spacer"></div>
    <div class="wrapper">
      <div class="row">
        <div class="col" style="width:45%">
          <div class="menu-button blue-green-gradient-bg circle">
            <div class="button-content"></div>
          </div>
          <span class="self-center button-text">LECCIONES</span>
        </div>
        <div class="col" style="width:10%"></div>
        <div class="col" style="width:45%">
          <div class="menu-button blue-green-gradient-bg circle">
            <div class="button-content"></div>
          </div>
          <span class="self-center button-text">PERFIL</span>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col" style="width:45%">
          <div class="menu-button blue-green-gradient-bg circle">
            <div class="button-content"></div>
          </div>
          <span class="self-center button-text">CONTENIDO</span>
        </div>
        <div class="col" style="width:10%"></div>
        <div class="col" style="width:45%">
          <div class="menu-button blue-green-gradient-bg circle">
            <div class="button-content"></div>
          </div>
          <span class="self-center button-text">EDITOR</span>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col" style="width:45%">
          <div class="menu-button blue-green-gradient-bg circle">
            <div class="button-content"></div>
          </div>
          <span class="self-center button-text">TIENDA</span>
        </div>
      </div>
    </div>
    <div class="footer-menu"></div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  name: "mainMenu",
  created: function() {
    this.$store.commit("setSubjectId", "1");
  },
  methods: {
    goToLessons() {
      setTimeout(() => {
        this.$router.push("/lessons");
      }, 150);
    },
    goToProfile() {
      setTimeout(() => {
        this.$router.push("/profile");
      }, 150);
    }
  }
};
</script>

<style scoped>
.bg-white {
  background: white;
}
.header {
  background: linear-gradient(to right, #262262 0%, #662d91 100%);
  position: absolute;
  top: 0;
  width: 100%;
  height: 3.5rem;
}
.header-spacer {
  height: 3.5rem;
}
.menu-button {
  width: 7rem;
  height: 7rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.5rem;
}
.row {
  justify-content: center;
}
.self-center {
  margin-left: auto;
  margin-right: auto;
}
.wrapper {
  margin-top: 2.5rem;
}
.button-text {
  font-weight: bold;
}
</style>
