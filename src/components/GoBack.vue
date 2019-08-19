<template>
  <button @click="goBack" class="go-back btn-back">
    <img src="logos/back.svg">
  </button>
</template>

<script>
export default {
  name: "GoBack",
  methods: {
    goBack() {
      history.go(-1);
    }
  }
};
</script>

<style>
.go-back {
}
.btn-back {
  background: transparent;
  color: white;
  border: solid;
  border-width: 1.2px;
  border-color: transparent;
}
.btn-back:focus {
  background: transparent;
  color: white;
  border: solid;
  border-width: 1.2px;
  border-color: transparent;
  outline: none;
  border-radius: 25px;
}
.btn-back:active {
  background: transparent;
  color: white;
  border: solid;
  border-width: 1.2px;
  border-color: transparent;
  border-radius: 100%;
  background-color: teal;
}
</style>
