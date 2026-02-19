<!-- <template>
  <div class="flex items-center justify-center h-full bg-gray-100">
    <form
      @submit.prevent="handleSubmit"
      class="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
    >
      <h2 class="text-2xl font-bold text-center text-gray-700">Create Account</h2>


      <div>
        <label class="block text-gray-600 mb-1">Firstname</label>
        <input
          v-model="form.firstname"
          type="text"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter firstname"
        />
      </div>

      <div>
        <label class="block text-gray-600 mb-1">Lastname</label>
        <input
          v-model="form.lastname"
          type="text"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter lastname"
        />
      </div>

      <div>
        <label class="block text-gray-600 mb-1">Gender</label>
        <select
          v-model="form.gender"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label class="block text-gray-600 mb-1">Gmail</label>
        <input
          v-model="form.gmail"
          type="email"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter Gmail"
        />
      </div>


      <div>
        <label class="block text-gray-600 mb-1">Password</label>
        <input
          v-model="form.password"
          type="password"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter password"
        />
      </div>


      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Create
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  firstname: "",
  lastname: "",
  gender: "",
  gmail: "",
  password: "",
});

const handleSubmit = () => {
  console.log("Form submitted:", form);
  alert(`Account created for ${form.firstname} ${form.lastname}`);
};
</script> -->



<template>
  <div>
     <div>
          <props 
              v-for="element in items" 
              :key="element.name" 
              :name="element.name" 
              :desc="element.desc" 
              :check="element.check">
          </props>
      </div>
     <div>
          <props 
              v-for="element in items" 
              :key="element.name" 
              :name="element.name" 
              :desc="element.desc" 
              :check="element.check">
          </props>
      </div>
     <div>
          <props 
              v-for="element in items" 
              :key="element.name" 
              :name="element.name" 
              :desc="element.desc" 
              :check="element.check">
          </props>
      </div>
    </div>
    
</template>
<script>
import props from './props.vue';
export default{
  components:{props},
    data(){
    return {
      items:[
        {
          name:'yut',
          desc:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatem rem nihil, minus ipsa itaque blanditiis, eum doloribus optio sunt deleniti temporibus, numquam hic. A molestias et enim atque commodi.',
          check:true}
      ]
    }
  }
}

</script>
