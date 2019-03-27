<template>
  <div>
    <img class="image-content" v-bind:src="videoSource">
  </div>
</template>

<script>
export default {
  name: "ImageContent",
  props: ["imageSource"]
};
</script>

<style>
.image-content {
  max-width: 100%;
}
</style>
