
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
      var btn1 = document.getElementById('btnCol1');
      this.seleccion1 = tag.value;
      if(this.seleccion1 === this.seleccion2){
        console.log("Correcto");
        btn1.parentNode.removeChild(btn1);
      }
      else{
        console.log("Incorrecto.");
      }
    },
    seleccionCol2 (tag) {
      this.seleccion2 = tag.value;
      var btn1 = document.getElementById('btnCol2');
      if(this.seleccion1 === this.seleccion2){
        console.log("Correcto");
        btn1.parentNode.removeChild(btn1);
      }
      else{
        console.log("Incorrecto.");
      }
    },
    mostrarSeleccion () {
      console.log(this.seleccion1);
      console.log(this.seleccion2);
    }
  }
})


