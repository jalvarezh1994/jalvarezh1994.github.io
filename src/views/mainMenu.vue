<template>
  <div class="page bg-white full-height">
    <SideMenu/>
    <div class="header-spacer"></div>
    <div class="wrapper animated fadeInRight">
      <div class="row">
        <div class="col" style="width:45%">
          <div @click="goTo('/lessons')" class="menu-button hover-pressed">
            <img class="button-image" src="/svg/lessons.svg" style="width:80%">
          </div>
          <span class="self-center button-text">LECCIONES</span>
        </div>
        <div class="col" style="width:10%"></div>
        <div class="col" style="width:45%">
          <div @click="goTo('/profile')" class="menu-button hover-pressed">
            <img class="button-image" src="/svg/profile-logo.svg">
          </div>
          <span class="self-center button-text">PERFIL</span>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col" style="width:45%">
          <div class="menu-button hover-pressed">
            <img class="button-image" src="/svg/documentation.svg">
          </div>
          <span class="self-center button-text">DOCUMENTACIÓN</span>
        </div>
        <div class="col" style="width:10%"></div>
        <div class="col" style="width:45%">
          <div class="menu-button hover-pressed">
            <img class="button-image" src="/svg/editor.svg">
          </div>
          <span class="self-center button-text">EDITOR</span>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col" style="width:45%">
          <div class="menu-button hover-pressed">
            <img class="button-image" src="/svg/store.svg">
          </div>
          <span class="self-center button-text">TIENDA</span>
        </div>
      </div>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  created: function() {
    this.$store.commit("setSubjectId", "1");
  },
  methods: {
    goTo(directory) {
      setTimeout(() => {
        this.$router.push(directory);
      }, this.$linkClickDelay);
    }
  }
};
</script>

<style scoped>
.menu-button {
  width: 7rem;
  height: 7rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  background-image: url("/svg/circle-blue-green.svg");
}
.button-image {
  width: 65%;
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
.fadeInRight {
  animation: fadeInRight 400ms ease;
}
</style>
