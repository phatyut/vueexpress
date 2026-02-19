<template>
    <div class="relative full">


      <table class="  relative w-full ">
                <tr class="bg-blue-200 *:text-start  *:p-5">
                    <th >name</th>
                    <th>Gender</th>
                    <th>Age</th>
                </tr>
                <tr 
                    class=" border-blue-100 hover:bg-blue-50 border-b *:p-5 *:text-start "
                    v-for="element in items" :key="element">
                    <th>{{ element.name }}</th>
                    <th>{{ element.gender }}</th>
                    <th>{{ element.age }}</th>
                </tr>
      </table>
     
           
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return {
                items:[]
            }
        }, mounted() {
    axios.get('http://localhost:9000/showdata')
      .then(response => {
        this.items = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
 
    }
 }
    
</script>

<style  scoped>

</style>