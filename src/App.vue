<template>
  <div id="app" class="teal lighten-5">
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper left-align teal darken-4">
          <a href="#" class="brand-logo left">Oro Ninja</a>
        </div>
      </nav>
    </div>
    <div class="row">
      <div class="card-panel col s4 offset-s4 teal accent-4">
        <h4 class="white-text">Tu Oro: {{ score }} <img src="./assets/coin.png"></h4>
      </div>
    </div>
    <div class="row">
      <div class="col s3">
        <FindGold titulo="Granja" :min="10" :max="20"/>
      </div>
      <div class="col s3">
        <FindGold titulo="Cueva" :min="5" :max="10"/>
      </div>
      <div class="col s3">
        <FindGold titulo="Casa" :min="2" :max="5"/>
      </div>
      <div class="col s3">
        <FindGold titulo="Casino" :min="-50" :max="50"/>
      </div>
    </div>
    <div class="row"> 
      <Activities/>
    </div>
    <a class="btn waves-effect waves-light teal accent-4" @click="reiniciar">Reiniciar</a> 
  </div>
</template>

<script>
import FindGold from "./components/FindGold.vue";
import Activities from "./components/Activities.vue";
import Store from "./store.js"

export default {
  name: "App",
  components: {
    FindGold,
    Activities
  },
  data() {
    return Store.state
  },
  methods: {
    reiniciar() {
      const respuesta = confirm('¿Estás seguro que quieres resetear el juego? Perderás todo el progreso');
      if (respuesta) {
        Store.state.score = 0;
        Store.state.actividades = [];
      }
    }
  }
};
</script>

<style>
#app {
  position: absolute;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100%;
  width: 100%;
}
.nav-wrapper {
  padding-left: 10px;
}
h4 img {
  height: 1.5rem;
  position: relative;
}
img {
  height: 1rem;
  position: relative;
}
.row {
  margin-bottom: 0;
}
.borrar {
  float: right;
  color: rgba(255, 255, 255, 0.87);
}
.fecha {
  float: right;
  margin-right: 20px;
  margin-top: 2.5px;
  font-style: italic;
  font-size: 12pt;
  color: rgba(255, 255, 255, 0.76);
}
</style>