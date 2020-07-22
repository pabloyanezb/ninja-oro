<template>
  <div class="card-panel">
    <h4 class="teal-text text-darken-3">{{ titulo }}</h4>
    <p class="grey-text text-darken-1">(genera entre {{ min }} <img src="../assets/coin.png"> y {{max}} <img src="../assets/coin.png">)</p>
    <a class="btn waves-effect waves-light" @click="generarOro">Buscar Oro!</a> 
  </div>
</template>

<script>
import Store from "@/store.js";
import Coin from '@/assets/coin.png';

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
      const actividad = `${((newScore < 0) ? 'Perdiste' : 'Ganaste')} ${newScore} <img src="${Coin}"> ${((this.titulo == 'Casino') ? 'en el' : 'en la')} <b>${this.titulo}</b>${((newScore < 0) ? ' :(' : '!')} <span class='fecha'>(${fechaActual})</span>`;
      Store.generarActividades(actividad);
    }
  }
};
</script>

<style scoped>
img {
  height: 10pt;
  position: relative;
  top: 2px;
}
.btn {
  user-select: none;
  font-weight: 700;
  background-size: 190% auto;
  background-image: linear-gradient(to right, #DFBD69 0%, #EDC967 51%, #ccaa6e 100%);
}
.btn:hover {
  background-position: right center;
}
.card-panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 205px;
  justify-content: space-between;
}
h4 {
  margin-bottom: 0;
}
</style>
