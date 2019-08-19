<template>
  <div>
    <img class="image-content" v-bind:src="src">
  </div>
</template>

<script>
export default {
  name: "ImageContent",
  props: ["imageId"],
  computed: {
    src: function() {
      const getters = this.$store.getters;
      const src = `/subjects/${getters.getSubjectId}/${getters.getTopicId}/${
        getters.getLessonId
      }/${getters.getPageId}/images/${this._props.imageId}`;
      return src;
    }
  }
};
</script>

<style>
.image-content {
  max-width: 100%;
}
</style>
