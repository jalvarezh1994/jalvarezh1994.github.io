<template>
  <div>
    <iframe v-bind:src="animationSource" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: "AnimationContent",
  props: ["animationSource"],
  mounted: function() {}
};
</script>

<style>
.video-content {
  max-width: 100%;
}
</style>
