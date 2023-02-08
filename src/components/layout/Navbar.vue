<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="flex justify-center gap-10 px-2 py-3 text-lg font-bold bg-[#5f4c4c] text-white"
  >
    <div class="hover:text-gray-400">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    </div>
    <div class="hover:text-gray-400">
      <RouterLink :to="{ name: 'searchMeals' }">Search meals</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.router-link-active {
  color: #f3b31d;
}
</style>
