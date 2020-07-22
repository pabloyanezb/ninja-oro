<template>
  <div class="col s12">
    <h6 class="left-align">Actividades:</h6>
    <ul class="card-panel teal darken-4 white-text left-align" ref="messageDisplay">
      <li v-for="(actividad, i) in actividades" :key="i">
        <span class="borrar waves-effect waves-light" @click="$delete(actividades, i)">x</span>
        <span v-html="actividad"></span>
      </li>
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
  height: 11rem;
  overflow: auto;
}
li {
  font-size: 14pt;
  padding: 0 10px;
}
li:nth-of-type(odd) {
    background-color: #0000000e ;
}
</style>