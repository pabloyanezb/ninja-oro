export default {
    state: {
        score: 0,
        actividades: []
    },

    updateScore(newScore) {
        this.state.score += newScore;   
    }
}