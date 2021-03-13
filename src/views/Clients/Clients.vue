<style lang="scss" scoped src="./styles.scss"> </style>

<script >
import Vue from 'vue'
const data = localStorage.getItem('clients')
const clients= JSON.parse(data)

export default Vue.extend({
    name: 'Clients',
    data: function() {
         return  {
           clients: clients,
         }
    },
});
</script>

<template>
  <div class='_main'>
    <table>
      <tr>
        <th>Consesionario</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Cedula</th>
      </tr>
      <tr v-for="(client, index) in clients" v-bind:key="index">
        <td>{{client.dealership}}</td>
        <td>{{client.name}}</td>
        <td>{{client.lastname}}</td>
        <td>{{client.identification}}</td>
      </tr>
    </table>
  </div>
</template>


