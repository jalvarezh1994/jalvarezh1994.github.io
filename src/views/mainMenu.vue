<template>
  <div class="page bg-blue full-height">
    <div class="wrapper">
      <AccountButton/>
      <div class="container-fluid mb-2">
        <div class="col-45">
          <button class="btn full-height menu-font p-1" @click="goToLessons()">
            <div class="col">
              <img src="/logos/lessons.svg" class="menu-logo-lessons">
              <br>
              <span>Lecciones</span>
            </div>
          </button>
        </div>
        <div class="col-10"></div>
        <div class="col-45">
          <button class="btn full-width mb-1 menu-font p-1">
            <img src="/logos/profile.svg" class="menu-logo-center">
            <br>Perfil
          </button>
          <button class="btn full-width menu-font p-1">
            <img src="/logos/stats.svg" class="menu-logo-center">
            <br>
            <span class="font-small">Estadísticas</span>
          </button>
        </div>
      </div>
      <div class="container-fluid mb-2">
        <button class="btn menu-font h-4">
          <div class="row center-xy">
            <img src="/logos/games.svg" class="menu-logo-games mr-1">
            <span>Juegos</span>
          </div>
        </button>
      </div>
    </div>
    <button class="no-border btn-store footer menu-font h-4-3">
      <div class="row center-xy">
        <img src="/logos/store.svg" class="menu-logo-left mr-1">
        <span>Tienda</span>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "mainMenu",
  created: function() {
    this.$store.commit("setSubjectId", "0");
  },
  methods: {
    goToLessons() {
      this.$router.push("/lessons");
    }
  }
};
</script>

<style scoped>
.btn-store {
  background: transparent;
  color: white;
  border: solid;
  border-width: 1.2px;
  border-color: white;
  width: 100%;
  border-radius: 0px;
}
.btn-store:focus {
  background: transparent;
  color: white;
  border: solid;
  border-width: 1.2px;
  border-color: white;
  outline: none;
  width: 100%;
  border-radius: 0px;
}
.btn-store:active {
  background: transparent;
  color: white;
  border: solid;
  border-width: 1.2px;
  border-color: white;
  width: 100%;
  border-radius: 0px;
  background-color: teal;
}
.header-profile-logo {
  width: 3rem;
  height: 3rem;
}
.col-45 {
  width: 45% !important;
  min-width: 45%;
  display: flex;
  flex-direction: column;
}
.col-10 {
  width: 10% !important;
  min-width: 10%;
  display: flex;
  flex-direction: column;
}
.mb-1 {
  margin-bottom: 1rem;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;
}
.half-height {
  height: 50%;
}
.width-80 {
  width: 80%;
}
.rounded-white-border {
  border-radius: 100%;
  border: solid white 0.2rem;
}
.menu-logo-account {
  height: 100%;
  width: 100%;
}
.menu-logo-center {
  width: 3rem;
  align-self: center;
}
.menu-logo-left {
  width: 3rem;
}
.menu-logo-lessons {
  width: 4.5rem;
  align-self: center;
}
.no-border {
  border: none !important;
}
.h-4 {
  height: 5.5rem;
  line-height: 4.5rem;
}
.h-4-3 {
  height: 4.5rem;
  line-height: 4.3rem;
}
.center-xy {
  justify-content: center;
  align-items: center;
}
.mr-1 {
  margin-right: 1rem;
}
.p-1 {
  padding: 1rem;
}
.font-small {
  font-size: 0.9rem;
}
.menu-logo-stats {
  height: 1.8rem;
}
.center-xy {
  overflow-y: hidden;
}
.menu-logo-games {
  width: auto;
  height: 2.5rem;
}
.mb-2 {
  margin-bottom: 1rem;
}
@media (min-height: 600px) {
  .mb-2 {
    margin-bottom: 2rem;
  }
}
.no-padding {
  padding: 0;
}
</style>
