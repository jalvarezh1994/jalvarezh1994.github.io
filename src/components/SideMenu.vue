<template>
  <div class="header">
    <div @click="showSideMenu" class="hamburger-menu-container">
      <div class="hamburger-menu-circle circle">
        <img class="hamburger-menu-image" src="/svg/hamburger-menu.svg">
      </div>
    </div>
    <ul class="side-bar blue-purple-gradient-bg side-bar-shown">
      <li class="blue-purple-gradient-bg"></li>
      <li @click="goTo('/mainMenu')" class="hover-pressed blue-purple-gradient-bg">Menú Principal</li>
      <li class="hover-pressed blue-purple-gradient-bg">Sonido</li>
      <li class="hover-pressed blue-purple-gradient-bg">Cerrar sesión</li>
    </ul>
    <div class="side-bar-hidder"></div>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  data: function() {
    return {
      sideBarClass: "side-bar-hidden"
    };
  },
  methods: {
    showSideMenu() {},
    goTo(directory) {
      setTimeout(() => {
        this.$router.push(directory);
      }, 150);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(to right, #262262 0%, #662d91 100%);
  position: absolute;
  top: 0;
  width: 100%;
  height: 3.5rem;
}
.hamburger-menu-container {
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 1rem;
}
.hamburger-menu-image {
  height: 50%;
  width: 50%;
}
.hamburger-menu-circle {
  background-color: #221c52;
  height: 2.7rem;
  width: 2.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
