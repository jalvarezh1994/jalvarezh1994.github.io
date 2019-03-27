<template>
  <div>
    <video class="video-content" controls v-bind:src="videoSource"></video>
  </div>
</template>

<script>
export default {
  name: "VideoContent",
  props: ["videoSource"]
};
</script>

<style>
.video-content {
  max-width: 100%;
}
</style>
