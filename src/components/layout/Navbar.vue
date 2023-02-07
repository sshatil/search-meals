<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="flex justify-between px-2 py-3 text-lg font-bold bg-slate-600 text-white"
  >
    <div class="hover:text-gray-400">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    </div>
    <div class="hover:text-gray-400">
      <RouterLink :to="{ name: 'searchMeals' }">Search</RouterLink>
    </div>
  </section>
</template>
