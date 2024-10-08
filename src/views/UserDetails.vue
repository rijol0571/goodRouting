<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">{{ user.name }}</h1>
    <div class="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Phone:</strong> {{ user.phone }}</p>
      <p><strong>Website:</strong> <a :href="'http://' + user.website" class="text-blue-600" target="_blank">{{ user.website }}</a></p>
      <h2 class="mt-4 font-semibold">Address:</h2>
      <p>{{ user.address.street }}, {{ user.address.suite }}</p>
      <p>{{ user.address.city }}, {{ user.address.zipcode }}</p>
      <p><strong>Coordinates:</strong> {{ user.address.geo.lat }}, {{ user.address.geo.lng }}</p>
      <h2 class="mt-4 font-semibold">Company:</h2>
      <p>{{ user.company.name }}</p>
      <p><em>{{ user.company.catchPhrase }}</em></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetails",
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.fetchUserDetails();
  },
  methods: {
    async fetchUserDetails() {
      const userId = this.$route.params.id;
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        this.user = await response.json();
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    },
  },
};
</script>

<style scoped>

</style>
