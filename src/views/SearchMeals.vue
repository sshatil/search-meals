<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import MealItem from "@/components/MealItem.vue";

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
  <section class="pt-4">
    <div class="flex justify-center">
      <input
        type="text"
        class="border-gray-400 border rounded-md w-1/2"
        v-model="name"
      />
    </div>
    <div class="grid grid-cols-4 gap-3">
      <div class="" v-for="meal in meals" :key="meal.idMeal">
        <MealItem :meal="meal" />
      </div>
    </div>
  </section>
</template>
