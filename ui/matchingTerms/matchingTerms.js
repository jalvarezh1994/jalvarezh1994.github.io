
var matching = new Vue({
  el: '#app',
  data: {
    seleccion1: 0,
    seleccion2: 0,
    title: 'Selecciona la pareja correcta de etiquetas:',
    valores: {
      col1: [
        { text: '<h1>', value: 1 },
        { text: '<em>', value: 2 },
        { text: '<body>', value: 3 }
      ],
      col2: [
        { text: '</h1>', value: 1 },
        { text: '</em>', value: 2 },
        { text: '</body>', value: 3 }
      ]
    }
  },
  methods: {

    seleccionCol1 (tag) {
      btn1 = document.getElementById('btnCol1');
      btn2 = document.getElementById('btnCol2');
      this.seleccion1 = tag.value;
      if(this.seleccion1 === this.seleccion2){
        btn1.parentNode.removeChild(btn1);
        btn2.parentNode.removeChild(btn2);
      }

    },
    seleccionCol2 (tag) {
      this.seleccion2 = tag.value;
      btn1 = document.getElementById('btnCol1');
      btn2 = document.getElementById('btnCol2');
      if(this.seleccion1 === this.seleccion2){
        btn1.parentNode.removeChild(btn1);
        btn2.parentNode.removeChild(btn2);
      }

    },

  }
})


