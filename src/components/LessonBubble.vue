<template>
  <div class="col" v-bind:class="centerLine" style="width: 49%">
    <div class="row">
      <div class="col" v-bind:class="leftDiag" style="width: 50%"></div>
      <div class="col" style="width: 50%">
        <div v-bind:class="diag"></div>
      </div>
      <div class="col" v-bind:class="rightDiag" style="width: 50%"></div>
    </div>
    <div class="row" style="height:1.5rem">
      <div class="col border-right" style="width: 50%"></div>
      <div class="col" style="width: 50%"></div>
    </div>
    <div class="lesson self-center hover-pressed" @click="goToLesson(topicId, lesson)">
      <div class="col full-width">
        <div class="row row-center">
          <span class="lesson-title">{{lesson.lessonTitle}}</span>
        </div>
        <div class="row row-center">
          <StarRating
            v-bind:star-size="starRatingProps.starSize"
            v-bind:show-rating="starRatingProps.showRating"
            v-bind:max-rating="starRatingProps.maxRating"
            v-bind:read-only="starRatingProps.readOnly"
            v-bind:rounded-corners="starRatingProps.roundedCorners"
            v-bind:rating="getLessonScore"
            active-color="#ffc65a"
            border-color="#00"
            class="my-stars"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LessonBubble",
  props: ["lesson", "index", "topicId"],
  data: function() {
    return {
      starRatingProps: {
        starSize: 25,
        showRating: false,
        maxRating: 3,
        readOnly: true,
        roundedCorners: true
      }
    };
  },
  computed: {
    diag: function() {
      const bool = this.index % 2 === 0;
      return {
        "diag-left": bool,
        "diag-right": !bool
      };
    },
    leftDiag: function() {
      const bool = this.index % 2 === 0;
      return {
        "d-none": !bool
      };
    },
    rightDiag: function() {
      const bool = this.index % 2 === 0;
      return {
        "d-none": bool
      };
    },
    centerLine() {
      const bool = this.index % 2 === 0;
      return {
        "border-right": bool,
        "mt-2": !bool,
        "mt-4": bool
      };
    },
    getLessonScore() {
      const scores = window.localStorage.getItem("scores");
      if (scores && scores !== "undefined" && scores !== "null") {
        const parsedScores = JSON.parse(scores);
        const lastScore = parsedScores.find(v => {
          return v.lessonId === this.lesson.lessonId;
        });
        if (lastScore) {
          return lastScore.score;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    }
  },
  methods: {
    goToLesson() {
      this.$store.commit("setTopicId", this.topicId);
      this.$store.commit("setLessonId", this.lesson.lessonId);
      setTimeout(() => {
        this.$router.push("/lesson");
      }, 150);
    }
  }
};
</script>

<style lang="less" scoped>
.lesson {
  border-radius: 100%;
  height: 8rem;
  width: 8rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  background-image: url("/svg/circle-blue-green.svg");
}
.lesson-title {
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  color: white;
}
.my-stars {
  justify-content: center !important;
}
.mt-2 {
  margin-top: 2rem;
}
.border-right {
  border: solid #c8c8c8 2px;
  border-left: 0px;
  border-top: 0px;
  border-bottom: 0px;
}
.d-none {
  display: none !important;
  color: transparent;
}
.diag-left {
  height: 2.5rem;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M0 99 L99 0 L100 1 L1 100' fill='c8c8c8' /></svg>");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%, auto;
}
.diag-right {
  height: 2.5rem;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M1 0 L0 1 L99 100 L100 99' fill='c8c8c8' /></svg>");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%, auto;
}
.topic-container {
  margin-bottom: 2rem;
}
.topic {
  height: 2rem !important;
}
.header-profile-logo {
  width: 3rem;
  height: 3rem;
}
.bg-blue {
  background-color: #165a6b !important;
}
.mb-1 {
  margin-bottom: 1rem;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;
}
.half-height {
  height: 50%;
}
.width-80 {
  width: 80%;
}
.rounded-white-border {
  border-radius: 100%;
  border: solid white 0.2rem;
}
.menu-logo-account {
  height: 100%;
  width: 100%;
}
.menu-logo-center {
  width: 3rem;
  align-self: center;
}
.menu-logo-left {
  width: 3rem;
}
.menu-logo-lessons {
  width: 4.5rem;
  align-self: center;
}
.no-border {
  border: 0px;
}
.h-4 {
  height: 5.5rem;
  line-height: 4.5rem;
}
.h-4-3 {
  height: 4.5rem;
  line-height: 4.3rem;
}
.center-xy {
  justify-content: center;
  align-items: center;
}
.mr-1 {
  margin-right: 1rem;
}
.p-1 {
  padding: 1rem;
}
.font-small {
  font-size: 0.9rem;
}
.menu-logo-stats {
  height: 1.8rem;
}
.center-xy {
  overflow-y: hidden;
}
.menu-logo-games {
  width: auto;
  height: 2.5rem;
}
.mb-2 {
  margin-bottom: 1rem;
}
@media (min-height: 600px) {
  .mb-2 {
    margin-bottom: 2rem;
  }
}
.no-padding {
  padding: 0;
}
</style>

