import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    score: 0,
    actividades: []
  },
  getters: {
    getActivities(state) {
      return state.actividades;
    },
    getScore(state) {
      return state.score;
    }
  },
  mutations: {
    updateScore(state, newScore) {
      state.score += newScore;
    },
    generarActividades(state, actividad) {
      state.actividades = [...state.actividades, actividad];
    },
    reiniciar(state) {
      const respuesta = confirm('¿Estás seguro que quieres resetear el juego? Perderás todo el progreso');
      if (respuesta) {
        state.score = 0;
        state.actividades = [];
      }
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
