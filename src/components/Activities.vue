<template>
  <div class="col s12">
    <h5 class="left-align">Actividades:</h5>
    <ul class="card-panel teal lighten-1 white-text left-align" ref="messageDisplay">
      <li v-for="actividad in actividades" :key="actividad" v-html="actividad">{{ actividad }}</li>
    </ul>
  </div>
</template>

<script>
import Store from "@/store.js";

export default {
  name: "Activities",
  data() {
    return Store.state;
  },
  // Metodo para que la lista haga scroll automáticamente hasta el final
  updated() {
    this.scrollToEnd();
  },
  methods: {
    scrollToEnd() {
      var messageDisplay = this.$refs.messageDisplay;
      messageDisplay.scrollTop = messageDisplay.scrollHeight;
    }
  }
};
</script>

<style scoped>
ul {
  padding: 1rem;
  height: 15rem;
  overflow: auto;
}
li {
  font-size: 14pt;
}
</style>