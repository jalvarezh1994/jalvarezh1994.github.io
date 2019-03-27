<template>
  <img v-bind:src="imageSource">
</template>

<script>
export default {
  name: "ImageContent",
  props: ["imageSource"]
};
</script>

<style>
</style>
