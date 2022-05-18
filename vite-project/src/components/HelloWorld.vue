<template>
  <div>
    <h2>Filter LearnVue Articles</h2>
    <input 
      type='text' 
      placeholder='Filter Search' 
      v-model='query'
    />
    <br>
    <button @click='reset'> Reset </button>
    <search-results :query='query'/>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import SearchResults from './SearchResults.vue'

  export default {
    components: {
      SearchResults
    },
    
    setup () {
      const query = ref('')

      const reset = (evt) => {
        query.value = '' // clears the query
      }
      
      return {
        reset,
        query
      }
    }
  }
</script>

<style>
  input[type='text'] {
    margin-bottom: 20px;
    padding: 10px;
  }
  button {
  margin-top: 20px;
}
</style>




<!-- 
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p> --> 
