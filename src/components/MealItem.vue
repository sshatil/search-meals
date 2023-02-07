<script setup>
import { RouterLink } from "vue-router";
defineProps({
  meal: {
    type: Object,
  },
});
</script>

<template>
  <section class="rounded-md border">
    <img
      :src="meal.strMealThumb"
      alt=""
      class="object-cover w-full rounded-t-md"
    />
    <div class="p-2">
      <h1 class="text-lg font-semibold">{{ meal.strMeal }}</h1>
      <p class="text-md">
        Instructions:
        {{ meal.strInstructions.slice(0, 110) }}...
        <small class="cursor-pointer text-blue-500"
          ><RouterLink :to="{ name: 'mealDetail', params: { id: meal.idMeal } }"
            >read more</RouterLink
          ></small
        >
      </p>
      <div class="mt-2">
        <a
          :href="meal.strYoutube"
          class="px-2 py-1 text-sm font-medium bg-red-500 rounded-md text-white hover:bg-red-600 transition-colors"
          target="_blank"
          >Youtube</a
        >
      </div>
    </div>
  </section>
</template>
