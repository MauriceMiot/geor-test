<script setup>
import Vue from 'vue'
import  { SideBar }  from '../../components'

export default Vue.extend({
    name: 'app',
    components: {
      SideBar,
  
    }
});


</script>

<template>
<div class='_main'>
    <SideBar/>
  <div class="_homeContainer">

   <router-view/>

  </div>
  </div>
</template>


<style lang="scss" scoped src="./styles.scss"> </style>

