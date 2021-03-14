<style lang="scss" scoped src="./styles.scss"> </style>

<script >
import Vue from 'vue'
const data = localStorage.getItem('clients')
const clients= JSON.parse(data)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faDownload} from '@fortawesome/free-solid-svg-icons'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

library.add(faEdit, faTrash, faDownload)

export default Vue.extend({
    name: 'Clients',
    data: function() {
         return  {
           clients: clients,
           name: '',
           lastname: '',
           dealership: '',
           identification: '',
           status: true,
           edit:false,
           indexed: null
          }
        },
    methods:{
       addClient: function()  {
          if(!this.edit){
            this.clients.push ({
            name: this.name,
            lastname: this.lastname,
            dealership: this.dealership,
            identification: this.identification,
            status: true
            });
          }
          if (this.edit){
             this.clients[this.indexed].name = this.name 
             this.clients[this.indexed].lastname = this.lastname 
             this.clients[this.indexed].dealership = this.dealership 
             this.clients[this.indexed].identification = this.identification 
          
            this.edit = false
          }
        localStorage.setItem('clients',JSON.stringify(clients)) 
        },
        editClient: function(index, client)  {
            this.indexed= index
            this.edit = true
            this.name= client.name
            this.lastname= client.lastname
            this.dealership= client.dealership
            this.identification= client.identification
        },
         deleteClient: function(index)  {
          this.clients[index].status= false; 
          localStorage.setItem('clients',JSON.stringify(clients))
        },
        exportPDF() {
            var doc = new jsPDF()
              doc.autoTable({ html: '#clients-table'})
              doc.save('clients.pdf')
        }
      }
    
  });
</script>

<template>
  <div class='_main'>
  <div class='_formContainer'> 
    <span class='_icons' @click='exportPDF' > <font-awesome-icon :icon="['fas', 'download']"/> </span>
  <form class='_form'>
     <input class='_input' type='text' v-model='name' v-bind:placeholder="$t('name')" />
     <input class='_input' type='text' v-model='lastname' v-bind:placeholder="$t('lastname')" />
     <input class='_input' type='phone' v-model='identification' v-bind:placeholder="$t('identification')"/>
     <input class='_input' type='text' v-model='dealership' v-bind:placeholder="$t('dealership')"/>
        <button class="_button" type='submit' @click='addClient'> {{ $t('add') }} </button>
  </form>
  </div>
    <table id='clients-table'>
      <tr>
        <th>{{ $t('dealerships') }}</th>
        <th>{{ $t('name') }}</th>
        <th>{{ $t('lastname') }}</th>
        <th>{{ $t('identification') }}</th>
        <th>{{ $t('options') }}</th>
      </tr>
      <tr v-for="(client, index) in clients" v-bind:key="index">
        <td v-if='client.status == true'>{{client.dealership}}</td>
        <td v-if='client.status == true'>{{client.name}}</td>
        <td v-if='client.status == true'>{{client.lastname}}</td>
       <td v-if='client.status == true'>{{client.identification}}</td>
       <td v-if='client.status == true' class='_iconsContainer'>
          <span @click='editClient(index, client)' class='_icons'><font-awesome-icon :icon="['fas', 'edit']"/></span> 
          <span @click='deleteClient(index)' class='_icons'><font-awesome-icon :icon="['fas', 'trash']"/></span> 
        </td>
      </tr>
    </table>
  </div>
</template>


