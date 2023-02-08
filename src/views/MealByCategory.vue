<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import MealByCategoryItem from "@/components/MealByCategoryItem.vue";
import Loading from "../components/utils/Loading.vue";

const route = useRoute();

const mealByCategory = ref([]);
const isLoading = ref(true);

const fetchMealByCategory = async () => {
  try {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.categoryName}`
    );
    mealByCategory.value = data.meals;
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchMealByCategory();
});
</script>

<template>
  <div class="" v-if="isLoading">
    <Loading />
  </div>
  <section
    class="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7"
  >
    <div class="" v-for="list in mealByCategory">
      <MealByCategoryItem :list="list" />
    </div>
  </section>
</template>
