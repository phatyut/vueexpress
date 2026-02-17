<template>
    <div>
             <ol v-for="element in items" :key="element">
                <li>{{ element.name }} - {{ element.gender }} - {{ element.age }}</li>
              </ol>   
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