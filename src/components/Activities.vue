<template>
  <div class="col s12">
    <h6 class="left-align">Actividades:</h6>
    <ul class="card-panel teal darken-4 white-text left-align" ref="messageDisplay">
      <li v-for="(actividad, i) in Actividades" :key="i" :class="{ 'red-text': actividad.num < 0, 'green-text':actividad.num > 0, 'text-accent-3':actividad.num > 0 }">
        <span class="borrar waves-effect waves-light" @click="$delete(Actividades, i)">x</span>
        <span v-html="actividad.text"></span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Activities",
  computed: {
    Actividades() {
      return this.$store.getters.getActivities;
    }
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