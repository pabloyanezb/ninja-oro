<template>
  <div class="card-panel green lighten-4">
    <h4 class="teal-text text-darken-3">{{ titulo }}</h4>
    <p class="teal-text text-darken-3">(genera{{ oro }} <img src="../assets/coin.png">)</p>
    <a class="btn waves-effect waves-light" @click="generarOro">Buscar Oro!</a> 
  </div>
</template>

<script>
import Store from "@/store.js";
import Coin from '@/assets/coin.png'
export default {
  name: "FindGold",
  props: {
    titulo: String,
    oro: String,
    min: Number,
    max: Number
  },
  methods: {
    generarOro() {
      // Genera la cantidad de oro aleatoria y la actualiza
      const newScore = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      Store.updateScore(newScore);
      // Obtiene la fecha actual
      const fecha = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit', hour12: true};
      const fechaActual =  fecha.toLocaleDateString("es-CL", options);
      // Genera un arreglo que contenga la lista de actividades
      Store.state.actividades = [...Store.state.actividades, `${((newScore < 0) ? 'Perdiste' : 'Ganaste')} <span>${newScore}</span> <img src="${Coin}"> ${((this.titulo == 'Casino') ? 'en el' : 'en la')} <b>${this.titulo}</b>${((newScore < 0) ? ' :(' : '!')} (${fechaActual})`];
    }
  }
};
</script>

<style scoped>
img {
  height: 1rem;
  position: relative;
  top: 2px;
}
.btn {
  user-select: none;
  font-weight: 700;
  background-size: 190% auto;
  background-image: linear-gradient(to right, #DFBD69 0%, #EDC967 51%, #ccaa6e 100%)
}
.btn:hover {
  background-position: right center;
}
</style>
