<script setup>
import { RouterLink } from "vue-router";
import YoutubeBtn from "./utils/YoutubeBtn.vue";
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
        <YoutubeBtn :href="meal.strYoutube" />
      </div>
    </div>
  </section>
</template>
