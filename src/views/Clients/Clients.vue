<style lang="scss" scoped src="./styles.scss"> </style>

<script >
import Vue from 'vue'
const data = localStorage.getItem('clients')
const clients= JSON.parse(data)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faTrash)

export default Vue.extend({
    name: 'Clients',
    data: function() {
         return  {
           clients: clients,
           name: '',
           lastname: '',
           dealership: '',
           identification: '',
           status: true
          }
        },
    methods:{
       addClient: function()  {
            this.clients.push ({
            name: this.name,
            lastname: this.lastname,
            dealership: this.dealership,
            identification: this.identification,
            status: true
            });
            localStorage.setItem('clients',JSON.stringify(clients)) 
        },
        editClient: function(index)  {
            this.edit = this.clients[index]
            console.log(this.edit)
            localStorage.setItem('dealerships',JSON.stringify(this.edit)) 
           /*  this.edit.push ({
            name: this.name,
            municipality: this.municipality,
            carsnumber: this.carsnumber,
            phone: this.phone,
            }); */
            localStorage.setItem('clients',JSON.stringify(clients))  
        },
         deleteClient: function(index)  {
          this.clients[index].status= false; 
          localStorage.setItem('clients',JSON.stringify(clients))
        }
      }
    
  });
</script>

<template>
  <div class='_main'>
  <form class='_form'>
     <input class='_input' type='text' v-model='name' v-bind:placeholder="$t('name')" />
     <input class='_input' type='text' v-model='lastname' v-bind:placeholder="$t('lastname')" />
     <input class='_input' type='phone' v-model='identification' v-bind:placeholder="$t('identification')"/>
     <input class='_input' type='text' v-model='dealership' v-bind:placeholder="$t('dealership')"/>
        <button class="_button" type='submit' @click='addClient'> {{ $t('add') }} </button>
  </form>
    <table>
      <tr>
        <th>{{ $t('dealerships') }}</th>
        <th>{{ $t('name') }}</th>
        <th>{{ $t('lastname') }}</th>
        <th>{{ $t('identification') }}</th>
      </tr>
      <tr v-for="(client, index) in clients" v-bind:key="index">
        <td v-if='client.status == true'>{{client.dealership}}</td>
        <td v-if='client.status == true'>{{client.name}}</td>
        <td v-if='client.status == true'>{{client.lastname}}</td>
       <td v-if='client.status == true'>{{client.identification}}</td>
       <td v-if='client.status == true' class='_iconsContainer'>
          <span @click='editClient(index)' class='_icons'><font-awesome-icon :icon="['fas', 'edit']"/></span> 
          <span @click='deleteClient(index)' class='_icons'><font-awesome-icon :icon="['fas', 'trash']"/></span> 
        </td>
      </tr>
    </table>
  </div>
</template>


