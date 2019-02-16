var app = new Vue({
  el: '#app',
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
    },
    validar () {
      if (this.seleccionado) {
        console.log('Respuesta verdadera')
      } else {
        console.log('Respuesta errónea')
      }
    },
    myFunc () {
      fetch('../../json/questions.json').then(function(resp){return resp.json()}).then(
        function(data){
          const newProps = data.selectOne[0];
          this.newProps = newProps;
          console.log(this.newProps);
        });
    }
  }

})