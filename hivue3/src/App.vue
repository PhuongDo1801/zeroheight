<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <BlockTimer :delay="delay" v-if="isPlaying" @end="endGame"></BlockTimer>
  <ResuleTimer v-if="showResult" :score="score"></ResuleTimer>
</template>

<script>
import BlockTimer from '@/components/BlockTimer.vue';
import ResuleTimer from '@/components/ResultTimer.vue';
export default {
  name: 'App',
  components: {
    BlockTimer, ResuleTimer
  },
  data(){
    return {
      isPlaying: false,
      delay: null,
      score: 0,
      showResult: false,
    }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 1000;
      this.isPlaying = true;
      this.showResult = false;
    },
    endGame(reactionTime){
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    }
  }
}
</script>

<style>
@import url(./assets/css/main.css);
#app {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  cursor: pointer;
  margin-top: 10px;
  background-color: #19d423;
  color: #FFF;
  border-radius: 4px;
  width: 80px;
  height: 32px;
  outline: none;
  border: none;
}
button:disabled {
  cursor: not-allowed;
}
</style>
