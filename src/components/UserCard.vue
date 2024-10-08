<template>
  <div
    class="flex flex-col items-center border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
    @click="goToUserDetails"
  >
    <img
      src="@/assets/person.png"
      alt="User Icon"
      class="w-16 h-16 rounded-full mb-2 border border-gray-300"
    />
    <h2 class="text-xl font-semibold">{{ user.name }}</h2>
    <p class="text-gray-600">@{{ user.username }}</p>
    <p class="text-gray-600">{{ user.email }}</p>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToUserDetails() {
      this.$router.push({ name: 'UserDetails', params: { id: this.user.id } });
    },
  },
};
</script>

<style scoped>
/* Qo'shimcha uslublar qo'shishingiz mumkin */
</style>
