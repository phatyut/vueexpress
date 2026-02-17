<template>
  <div class="flex w-screen h-screen  ">

<!-- _________body left___________ -->


      <div class="w-[20%] h-screen border-r border-white bg-gray-100 pt-2.5">
          <div class="flex flex-col gap-3.5">
            <div class="flex justify-center items-center">
                <div class="w-25 h-25 rounded-full bg-gray-300 flex justify-center items-center">
                    <img 
                        src="../public/vite.svg" 
                        alt="vite.svg"
                        class="w-20">
                </div>
            </div>
            <h1 class=" text-center text-blue-400">Testing Vue App</h1>
          </div>
          <div class="pt-12 px-1">
             
              <router-link to="/products" >
                  <div class=" px-2.5  border-l-2 p-1 font-bold transition duration-150 hover:text-white hover:bg-gray-500 border-blue-300 border-b">
                      <button class=" cursor-pointer ">
                          Products
                      </button>
                  </div>
              </router-link>
              <router-link to="/evaluate" >
                  <div class=" px-2.5  border-l-2 p-1 font-bold transition duration-150 hover:text-white hover:bg-gray-500 border-blue-300 border-b">
                      <button class=" cursor-pointer ">
                          Evaluate
                      </button>
                  </div>
              </router-link>
              <router-link to="/usercredentail" >
                  <div class=" px-2.5  border-l-2 p-1 font-bold transition duration-150 hover:text-white hover:bg-gray-500 border-blue-300 border-b">
                      <button class=" cursor-pointer ">
                          UserCredentail
                      </button>
                  </div>
              </router-link>
          </div>
       </div>


    <!-- _______body right________ -->


      <div class=" w-[80%] bg-gray-300 flex flex-col ">
        <div class="w-full relative h-[20%] p-1.5 ">
            <div class="bg-white h-full w-full rounded-[5px] flex items-center ">
                  <RightTop></RightTop>
            </div>
        </div>
        <div class="w-full relative h-[80%]  px-1.5">
            <div class="bg-white h-full w-full p-1.5 rounded-[5px] overflow-y-scroll">
            
              <router-view></router-view>
             </div>
            <div>
            </div>
        </div>

      </div>

  
  </div>
</template>

<script>
// import axios from 'axios';
import RightTop from './components/RightTop/RightTop.vue';
export default {
  components:{RightTop},
 data() {
   return {
     items: [],
   }
 }, 
 methods: {  },
}
</script>

<style lang="scss" scoped>

</style>