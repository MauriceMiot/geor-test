<style lang="scss" scoped src="./styles.scss"> </style>

<script >
import Vue from 'vue'
const data = localStorage.getItem('dealerships')
const dealerships= JSON.parse(data)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

library.add(faEdit, faTrash)

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
          }
        },
    methods:{
       addDealership: function()  {
            this.dealerships.push ({
            name: this.name,
            municipality: this.municipality,
            carsnumber: this.carsnumber,
            phone: this.phone,
            status: true
            });
            localStorage.setItem('dealerships',JSON.stringify(dealerships)) 
        },
        editDealership: function(index)  {
            this.edit = this.dealerships[index]
            console.log(this.edit)
            localStorage.setItem('dealerships',JSON.stringify(this.edit)) 
           /*  this.edit.push ({
            name: this.name,
            municipality: this.municipality,
            carsnumber: this.carsnumber,
            phone: this.phone,
            }); */
            localStorage.setItem('dealerships',JSON.stringify(dealerships))  
        },
         deleteDealership: function(index)  {
            this.dealerships[index].status= false; 
            localStorage.setItem('dealerships',JSON.stringify(dealerships))
        },
        exportPDF() {
            var doc = new jsPDF()
              doc.autoTable({ html: '#my-table'})
              doc.save('table.pdf')
        }
    }
  });
</script>

<template>
  <div class='_main'>
    <form class='_form'>
     <input class='_input' type='text' v-model='name' v-bind:placeholder="$t('name')" />
     <input class='_input' type='text' v-model='municipality' v-bind:placeholder="$t('municipality')" />
     <input class='_input' type='phone' v-model='carsnumber' v-bind:placeholder="$t('carsnumber')"/>
     <input class='_input' type='text' v-model='phone' v-bind:placeholder="$t('phone')"/>
        <button class="_button" type='submit' @click='exportPDF()'> {{ $t('add') }} </button>
    </form>
    <table id='my-table'>
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
          <span @click='editDealership(index)' class='_icons'><font-awesome-icon :icon="['fas', 'edit']"/></span> 
          <span @click='deleteDealership(index)' class='_icons'><font-awesome-icon :icon="['fas', 'trash']"/></span> 
        </td>
      </tr>
    </table>
  </div>
</template>



