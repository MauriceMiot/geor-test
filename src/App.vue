<script setup>
import Vue from 'vue'
import  { Navbar }  from './components'
import dealerships from './assets/data/dealerships.js'
import clients from './assets/data/clients.js'

function setLocalStorage(){
    if(!localStorage.dealerships) localStorage.setItem('dealerships',JSON.stringify(dealerships))
    if(!localStorage.clients) localStorage.setItem('clients',JSON.stringify(clients))
}

export default Vue.extend({
    name: 'app',
    components: {
      Navbar,
    },
    methods: setLocalStorage()
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
