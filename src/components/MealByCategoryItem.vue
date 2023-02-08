<script setup>
import { RouterLink } from "vue-router";
defineProps({
  list: {
    type: Object,
  },
});
</script>

<template>
  <section>
    <div class="rounded-md shadow-lg shadow-gray-500/30">
      <img
        :src="list.strMealThumb"
        alt=""
        class="object-cover w-full rounded-t-md"
      />
      <div class="p-2">
        <h1 class="text-lg font-semibold">{{ list.strMeal }}</h1>
        <RouterLink :to="{ name: 'mealDetail', params: { id: list.idMeal } }">
          <button
            class="bg-red-500 px-3 py-1 rounded-md text-white hover:bg-red-600 transition-colors w-full font-semibold mt-2"
          >
            Details
          </button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
