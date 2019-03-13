<template>
  <div id="vue-content">
    <div class="title-content">
      <h1 class="title">{{titleText}}</h1>
    </div>

    <div class="cards-content">
      <br>
      <br>
      <div v-for="tag in objeto.arreglo">
        <div class="card1">{{tag.card}}</div>
        <br>
        <br>
      </div>
    </div>
    <br>
    <br>

    <button class="button">Listo</button>
  </div>
</template>

<script>
export default {
  name: "syntaxOrder",
  data: function() {
    return {
      titleText: "Ordena de manera adecuada las siguientes etiquetas:",
      objeto: {
        arreglo: [{ card: "<img" }, { card: 'src="' }, { card: '"mono.png"' }]
      }
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.title {
  text-align: center;
  font-family: Arial;
  font-size: 30px;
  color: #fff;
}
.title-content {
  background-color: red;
  padding: 10px;
}
.cards-content {
  background-color: #d9d9d9;
  padding: 10px;
}
.card1 {
  background-color: #ff5959;
  width: auto;
  padding: 10px;
  color: #fff;
  font-family: Arial;
  border-radius: 10px;
  text-align: center;
  transition: 0.5s;
}
.card1:active {
  background-color: #a43737;
}
.button {
  width: 100%;
}
</style>
