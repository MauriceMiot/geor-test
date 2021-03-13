<style lang="scss" scoped src="./styles.scss"> </style>

<script >
import Vue from 'vue'
const data = localStorage.getItem('dealerships')
const dealerships= JSON.parse(data)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faTrash)



export default Vue.extend({
    name: 'Dealerships',
    data: function() {
         return  {
           dealerships: dealerships,
           dealership: ''
         }
    },
});
</script>

<template>
  <div class='_main'>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Municipio</th>
        <th>N° de autos</th>
        <th>Telefono</th>
        <th>Opciones</th>
      </tr>
      <tr v-for="(dealership, index) in dealerships" v-bind:key='index'>
        <td v-if='dealership.status == true'>{{dealership.name}}</td>
        <td v-if='dealership.status == true'>{{dealership.municipality}}</td>
        <td v-if='dealership.status == true'>{{dealership.carsnumber}}</td>
        <td v-if='dealership.status == true'>{{dealership.phone}}</td>
        <td v-if='dealership.status == true' class='_iconsContainer'>
          <span class='_icons'><font-awesome-icon :icon="['fas', 'edit']"/></span> 
          <span class='_icons'><font-awesome-icon :icon="['fas', 'trash']"/></span> 
        </td>
      </tr>
    </table>
  </div>
</template>



