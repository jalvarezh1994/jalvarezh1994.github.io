<template>
  <div class="page bg-blue full-height">
    <div class="wrapper">
      <div v-for="contentBlock in content">
        <div v-if="isText(contentBlock)">
          <TextContent v-bind:text="contentBlock.text"/>
        </div>
        <div v-if="isImage(contentBlock)">
          <ImageContent v-bind:imageSource="contentBlock.imageSource"/>
        </div>
        <div v-if="isAnimation(contentBlock)">
          <div>soy animación</div>
        </div>
        <div v-if="isInteractive(contentBlock)">
          <div>soy interactivo</div>
        </div>
      </div>
    </div>
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
      const contentArray = [
        {
          contentType: "text",
          text: "Welcome to <br/> Arrow GTP"
        },
        {
          contentType: "image",
          imageSource: '/lessons/id/images/imageId.jpg'
        },
        {
          contentType: "animation"
        },
        {
          contentType: "interactive"
        }
      ];
      return contentArray;
    }
  },
  methods: {
    isText(contentBlock) {
      return contentBlock.contentType === "text";
    },
    isImage(contentBlock) {
      return contentBlock.contentType === "image";
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
