<script setup>
import Vue from 'vue'
import  { Navbar }  from './components'

export default Vue.extend({
    name: 'app',
    components: {
      Navbar,
    }
});
</script>

<template>
  <div id="app">
    <Navbar />
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: white;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>
