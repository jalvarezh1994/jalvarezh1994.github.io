import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
    userScore: 0,
    subjectId: "",
    topics: [],
    topicId: "",
    lessonId: "",
    pageId: "",
    lessonSuccess: 0,
    lessonFail: 0,
    lessonTotal: 0
  },
  mutations: {
    setSubjectId(state, subjectId) {
      state.subjectId = subjectId;
      fetch("/startupScheme.json")
        .then(res => {
          return res.json();
        })
        .then(({ subjects }) => {
          const subject = subjects.find(v => v.subjectId === subjectId);
          state.topics = subject.topics;
        });
    },
    setTopicId(state, topicId) {
      state.topicId = topicId;
    },
    setLessonId(state, lessonId) {
      state.lessonId = lessonId;
    },
    setPageId(state, pageId) {
      state.pageId = pageId;
    },
    setLessonSuccess(state, lessonSuccess) {
      state.lessonSuccess = lessonSuccess
    },
    setLessonFail(state, lessonFail) {
      state.lessonFail = lessonFail
    },
    setLessonTotal(state, lessonTotal) {
      state.lessonTotal = lessonTotal;
    }
  },
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getUserScore(state) {
      return state.userScore;
    },
    getSubjectId(state) {
      return state.subjectId;
    },
    getTopics(state) {
      return state.topics;
    },
    getTopicId(state) {
      return state.topicId;
    },
    getLessonId(state) {
      return state.lessonId;
    },
    getPageId(state) {
      return state.pageId;
    },
    getLessonSuccess(state) {
      return state.lessonSuccess;
    },
    getLessonFail(state) {
      return state.lessonFail;
    },
    getLessonTotal(state) {
      return state.lessonTotal;
    }
  }
})
