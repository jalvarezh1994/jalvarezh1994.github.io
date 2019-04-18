<template>
  <div class="page bg-blue full-height">
    <SideMenu/>
    <div class="header-spacer"></div>
    <div class="wrapper animated fadeInRight">
      <div v-for="contentBlock in content">
        <div v-if="isText(contentBlock)">
          <TextContent v-bind:text="contentBlock.text"/>
        </div>
        <div v-if="isImage(contentBlock)">
          <ImageContent v-bind:imageId="contentBlock.imageId"/>
        </div>
        <div v-if="isVideo(contentBlock)">
          <VideoContent v-bind:videoId="contentBlock.videoId"/>
        </div>
        <div v-if="isAnimation(contentBlock)">
          <AnimationContent v-bind:animationId="contentBlock.animationId"/>
        </div>
        <div v-if="isInteractive(contentBlock)">
          <div>soy interactivo</div>
        </div>
      </div>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  name: "LessonContent",
  data: function() {
    return {};
  },
  computed: {
    content: function() {
      // contentType can be text, image, animation or interactive
      const topic = this.$store.getters.getTopics.find(
        v => v.topicId === this.$store.getters.getTopicId
      );
      const lesson = topic.lessons.find(
        v => v.lessonId === this.$store.getters.getLessonId
      );
      const page = lesson.pages.find(
        v => v.pageId === this.$store.getters.getPageId
      );
      const returnValue = page.content;
      return returnValue;
    }
  },
  methods: {
    isText(contentBlock) {
      return contentBlock.contentType === "text";
    },
    isImage(contentBlock) {
      return contentBlock.contentType === "image";
    },
    isVideo(contentBlock) {
      return contentBlock.contentType === "video";
    },
    isAnimation(contentBlock) {
      return contentBlock.contentType === "animation";
    },
    isInteractive(contentBlock) {
      return contentBlock.contentType === "interactive";
    }
  }
};
</script>

<style>
</style>
