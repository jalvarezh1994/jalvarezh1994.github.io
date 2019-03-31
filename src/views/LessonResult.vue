<template>
  <div class="page bg-blue">
    <div class="wrapper" style="height:100%">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <span class="text" style="font-size:3rem">Correctas</span>
      <br>
      <span class="text" style="font-size:3rem">{{successes}}</span>
      <br>
      <span class="text" style="font-size:3rem">Incorrectas</span>
      <br>
      <span class="text" style="font-size:3rem">{{failures}}</span>
      <br>
      <span class="text" style="font-size:3rem">{{score}}</span>
      <br>
      <StarRating
        v-bind:star-size="starRatingProps.starSize"
        v-bind:show-rating="starRatingProps.showRating"
        v-bind:max-rating="starRatingProps.maxRating"
        v-bind:read-only="starRatingProps.readOnly"
        v-bind:rounded-corners="starRatingProps.roundedCorners"
        v-bind:rating="getRating"
        active-color="#ffc65a"
        border-color="#00"
        class="my-stars"
      />
      <button class="btn" @click="goToHome">Regresar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LessonResult",
  data: function() {
    return {
      successes: 0,
      failures: 0,
      starRatingProps: {
        starSize: 70,
        showRating: false,
        maxRating: 3,
        readOnly: true,
        roundedCorners: true
      }
    };
  },
  created: function() {
    this.successes = this.$store.getters.getLessonSuccess;
    this.failures = this.$store.getters.getLessonFail;
  },
  methods: {
    getRating() {
      const succeses = this.$store.getters.getLessonSuccess;
      const failures = this.$store.getters.getLessonFail;
      return Math.floor(succeses / (succeses + failures));
    },
    goToHome() {
      setTimeout(() => {
        this.$router.push("/");
      }, 150);
    }
  }
};
</script>

<style scoped>
.text {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
