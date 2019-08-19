<template>
  <div>
    <video class="video-content" controls v-bind:src="src"></video>
  </div>
</template>

<script>
export default {
  name: "VideoContent",
  props: ["videoId"],
  computed: {
    src: function() {
      const getters = this.$store.getters;
      const src = `/subjects/${getters.getSubjectId}/${getters.getTopicId}/${
        getters.getLessonId
      }/${getters.getPageId}/videos/${this._props.videoId}`;
      return src;
    }
  }
};
</script>

<style>
.video-content {
  max-width: 100%;
}
</style>
