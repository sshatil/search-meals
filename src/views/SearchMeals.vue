<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import MealItem from "@/components/MealItem.vue";
import MealCategories from "../components/MealCategories.vue";

const name = ref("");
const meals = ref([]);

const handleSearch = async () => {
  try {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name.value}`
    );
    meals.value = data.meals;
  } catch (error) {
    console.log(error);
  }
};

watch(name, () => {
  handleSearch();
});
</script>

<template>
  <section class="pt-4 m-2">
    <div class="flex justify-center">
      <input
        type="text"
        class="border-gray-400 border rounded-md w-1/2 text-gray-500 p-2 focus:outline-none"
        v-model="name"
      />
    </div>
    <div
      class="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7"
    >
      <div class="" v-for="meal in meals" :key="meal.idMeal">
        <MealItem :meal="meal" />
      </div>
    </div>
    <div class="" v-if="meals.length === 0">
      <MealCategories />
    </div>
  </section>
</template>
