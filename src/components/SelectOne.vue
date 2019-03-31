<template>
  <div class="wrapper">
    <h1 style="color:white">{{question}}</h1>
    <br>
    <div v-for="answer in answers">
      <button class="btn option" @click="verify(answer.correct)">{{answer.value}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectOne",
  props: ["question", "answers"],
  methods: {
    verify(isCorrect) {
      if (isCorrect) {
        this.$emit('success');
      } else {
        this.$emit('failure');
      }
    }
  }
};
</script>

<style scoped>
.option {
  height: 3rem;
  margin-bottom: 1rem;
  font-size: 2rem;
}
</style>
