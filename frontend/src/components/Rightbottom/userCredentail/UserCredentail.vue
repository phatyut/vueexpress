<template>
  <div class="w-full p-6">
    <div class="overflow-x-auto shadow-md rounded-lg">
      <table class="min-w-full border border-gray-200 text-sm text-left text-gray-700">
        <thead class="bg-blue-500 text-white">
          <tr>
            <th class="px-6 py-3">Username</th>
            <th class="px-6 py-3">Email</th>
            <th class="px-6 py-3">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.username"
            class="border-b hover:bg-blue-50 transition"
          >
            <td class="px-6 py-4">{{ user.username }}</td>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">{{ user.password }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios
      .get('http://localhost:9000/users')
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },
};
</script>






