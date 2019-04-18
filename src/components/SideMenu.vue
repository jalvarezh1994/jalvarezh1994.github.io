<template>
  <div class="header">
    <div class="hamburger-menu-container">
      <div @click="showSideMenu(true)" class="hamburger-menu-circle circle">
        <img class="hamburger-menu-image" src="/svg/hamburger-menu.svg">
      </div>
    </div>
    <ul
      v-bind:class="{show: isSideBarShown}"
      class="side-bar blue-purple-gradient-bg side-bar-shown"
    >
      <li class="blue-purple-gradient-bg">
        <div class="row">
          <div class="col">
            <img src="/svg/vincet-logo.svg" class="vincet-logo">
          </div>
          <div class="col vincet-text-col">
            <span class="vincet-text">VINCET</span>
          </div>
          <div class="col" style="width:10%"></div>
        </div>
      </li>
      <li @click="goTo('/mainMenu')" class="hover-pressed blue-purple-gradient-bg">Menú Principal</li>
      <li class="hover-pressed blue-purple-gradient-bg">Sonido</li>
      <li class="hover-pressed blue-purple-gradient-bg">Cerrar sesión</li>
    </ul>
    <div
      @click="showSideMenu(false)"
      v-bind:class="{display: isSideBarShown}"
      class="side-bar-hidder"
    ></div>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  data: function() {
    return {
      isSideBarShown: false
    };
  },
  methods: {
    showSideMenu(bool) {
      this.isSideBarShown = bool;
    },
    goTo(directory) {
      setTimeout(() => {
        this.$router.push(directory);
      }, this.$linkClickDelay);
    }
  }
};
</script>

<style lang="less" scoped>
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
.side-bar {
  position: fixed;
  list-style: none;
  margin: 0px;
  top: 0px;
  width: 0;
  height: 100%;
  z-index: 1;
  padding: 0px;
  overflow: hidden;
  transition: all 500ms ease;
  li {
    font-size: 1.4rem;
    color: white;
    padding: 1rem;
    border-bottom: solid #662d91;
    white-space: nowrap;
  }
}
.show {
  width: 70%;
}
.side-bar-hidder {
  position: fixed;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 30%;
  z-index: 0;
  display: none;
}
.display {
  display: block;
}
.vincet-logo {
  width: 80%;
}
.vincet-text {
  font-family: "Zian";
  font-size: 1.75rem;
  font-weight: normal;
}
.vincet-logo-col {
  justify-content: center;
}
.vincet-text-col {
  justify-content: center;
}
</style>
