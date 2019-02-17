var app = new Vue({
  el: '#app',
  created: function () {
    fetch('../../json/questions.json').then(function (resp) { return resp.json() }).then(
      function (data) {
        const jsonProps = data.selectOne[1];
        Vue.set(app.newProps, 'answers', jsonProps.answers);
        Vue.set(app.newProps, 'question', jsonProps.question);
      });
  },
  data: {
    firstSelected: false,
    selected: false,
    isHidden: true,
    result: '',
    newProps: {
      answers: [],
      question: ''
    }
  },
  methods: {
    seleccion(v) {
      this.firstSelected = true;
      this.selected = v;
    },
    validar() {
      if (this.firstSelected) {
        this.isHidden = false;
        if (this.selected) {
          this.result = 'Respuesta verdadera';
        } else {
          this.result = 'Respuesta errónea';
        }
      }
    },
    hide() {
      this.isHidden = true;
    }
  }

})