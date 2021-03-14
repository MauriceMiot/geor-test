<style lang="scss" scoped src="./styles.scss"> </style>

<script >
import Vue from 'vue'
const data = localStorage.getItem('dealerships')
const dealerships= JSON.parse(data)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faDownload} from '@fortawesome/free-solid-svg-icons'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

library.add(faEdit, faTrash, faDownload)

export default Vue.extend({
    name: 'Dealerships',
    data: function() {
         return  {
           dealerships: dealerships,
           name: '',
           municipality: '',
           carsnumber: '',
           phone: '',
           status: true,
           edit:false,
           indexed: null
          }
        },
    methods:{
       addDealership: function()  {
         if(!this.edit){
            this.dealerships.push ({
            name: this.name,
            municipality: this.municipality,
            carsnumber: this.carsnumber,
            phone: this.phone,
            status: true
            });
          }
          if (this.edit){
             this.dealerships[this.indexed].name = this.name 
             this.dealerships[this.indexed].municipality = this.municipality 
             this.dealerships[this.indexed].carsnumber = this.carsnumber 
             this.dealerships[this.indexed].phone = this.phone 
          
            this.edit = false
          }
        localStorage.setItem('dealerships',JSON.stringify(dealerships)) 
        },
        editDealership: function(index ,dealership)  {
            this.indexed= index
            this.edit = true
            this.name= dealership.name
            this.municipality= dealership.municipality
            this.carsnumber= dealership.carsnumber
            this.phone= dealership.phone
        },
         deleteDealership: function(index)  {
            this.dealerships[index].status= false; 
            localStorage.setItem('dealerships',JSON.stringify(dealerships))
        },
        exportPDF() {
            var doc = new jsPDF()
              doc.autoTable({ html: '#dealerships-table'})
              doc.save('dealerships.pdf')
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
     <input class='_input' type='text' v-model='municipality' v-bind:placeholder="$t('municipality')" />
     <input class='_input' type='phone' v-model='carsnumber' v-bind:placeholder="$t('carsnumber')"/>
     <input class='_input' type='text' v-model='phone' v-bind:placeholder="$t('phone')"/>
     <button class="_button" type='submit' @click='addDealership'> {{ $t('add') }} </button>
    </form>
  </div>
    <table id='dealerships-table'>
      <tr>
        <th>{{ $t('name') }}</th>
        <th>{{ $t('municipality') }}</th>
        <th>{{ $t('carsnumber') }}</th>
        <th>{{ $t('phone') }}</th>
        <th>{{ $t('options') }}</th>
      </tr>
      <tr v-for="(dealership, index) in dealerships" v-bind:key='index'>
        <td v-if='dealership.status == true'>{{dealership.name}}</td>
        <td v-if='dealership.status == true'>{{dealership.municipality}}</td>
        <td v-if='dealership.status == true'>{{dealership.carsnumber}}</td>
        <td v-if='dealership.status == true'>{{dealership.phone}}</td>
        <td  v-if='dealership.status == true' class='_iconsContainer'>
          <span @click='editDealership(index,dealership)' class='_icons'><font-awesome-icon :icon="['fas', 'edit']"/></span> 
          <span @click='deleteDealership(index)' class='_icons'><font-awesome-icon :icon="['fas', 'trash']"/></span> 
        </td>
      </tr>
    </table>
  </div>
</template>



