<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-center">Our Users</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :user="user"
        class="border border-gray-300 hover:border-blue-500 transition duration-200" 
      />
    </div>
  </div>
</template>

<script>
import UserCard from '../components/UserCard.vue';

export default {
  name: "Home",
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        this.users = await response.json();
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Qo'shimcha uslublar qo'shishingiz mumkin */
.grid {
  border: 1px solid #e5e7eb; 
  padding: 1rem;
  border-radius: 0.5rem; 
}
</style>
