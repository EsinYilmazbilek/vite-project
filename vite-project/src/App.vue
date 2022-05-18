// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div :style="{ fontSize: levelFontSize + 'em' }">
  <Levels
  v-for="level in levels"
  :key="level.id"
  :title="level.title"
  @enlarge-text="levelFontSize += 0.1"
	></Levels>
  </div>
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Levels from './components/Levels.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Levels
  },
  data() {
    return {
      levels: [
        { id: 1, title: 'Beginner'},
        { id: 2, title: 'Intermediate'},
        { id: 3, title: 'Advanced'}
      ],
      levelFontSize: 1,
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
