var app = new Vue({
  el: '#app',
  created: function () {
    fetch('../../json/questions.json').then(function(resp){return resp.json()}).then(
      function(data){
        const jsonProps = data.selectOne[1];
        Vue.set(app.newProps,'answers',jsonProps.answers);
        Vue.set(app.newProps,'question',jsonProps.question);
      });
  },
  data: {
    selected: false,
    newProps: {
      answers: [],
      question: ''
    }
  },
  methods: {
    seleccion (v) {
      this.selected = v;
      console.log(this.selected);
    },
    validar () {
      if (this.selected) {
        console.log('Respuesta verdadera')
      } else {
        console.log('Respuesta errónea')
      }
    }
  }

})