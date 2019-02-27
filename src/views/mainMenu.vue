<template>
  <v-ons-page>
    <div class="page bg-blue">
      <div class="container-fluid">
        <img class="header-profile-logo" src="/logos/user-logo.png" alt>
      </div>
      <br>
      <div class="container-fluid">
        <div class="col-45">
          <v-ons-button modifier="outline" class="button full-height">Lecciones</v-ons-button>
        </div>
        <div class="col-10"></div>
        <div class="col-45">
          <v-ons-button modifier="outline" class="button">Perfil</v-ons-button>
          <v-ons-button modifier="outline" class="button">Estadísticas</v-ons-button>
        </div>
      </div>
      <div class="container-fluid">
        <v-ons-button modifier="outline" class="button">Juegos</v-ons-button>
      </div>
      <div class="container-fluid">
        <v-ons-button modifier="outline" class="button">Tienda</v-ons-button>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  name: "mainMenu",
  methods: {}
};
</script>

<style scoped>
.header-profile-logo {
  width: 3rem;
  height: 3rem;
}
.bg-blue {
  background-color: #165a6b !important;
}
.button {
  color: white;
  border-color: white;
  width: 100%;
  border-radius: 10px;
}
.col-45 {
  width: 45% !important;
  min-width: 45%;
}
.col-10 {
  width: 10% !important;
  min-width: 10%;
}
.full-height {
  height: 100% !important;
  min-height: 100%;
}
</style>
