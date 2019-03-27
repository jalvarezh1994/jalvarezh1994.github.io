<template>
  <div>
    <div class="text-content" v-html="text"></div>
  </div>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style>
.text-content {
  color: white;
  word-break: break-all;
}
</style>
