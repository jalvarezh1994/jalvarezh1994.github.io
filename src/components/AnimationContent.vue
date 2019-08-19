<template>
  <div>
    <iframe v-bind:src="src" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: "AnimationContent",
  props: ["animationId"],
  computed: {
    src: function() {
      const getters = this.$store.getters;
      const src = `/subjects/${getters.getSubjectId}/${getters.getTopicId}/${
        getters.getLessonId
      }/${getters.getPageId}/animations/${this._props.animationId}/index.html`;
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
