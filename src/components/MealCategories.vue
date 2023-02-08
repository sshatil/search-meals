<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import Category from "./Category.vue";

const categoryList = ref([]);
const fetchCategoryList = async () => {
  try {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    categoryList.value = data.categories;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchCategoryList();
});
</script>

<template>
  <section
    class="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7"
  >
    <div class="" v-for="list in categoryList">
      <Category :list="list" />
    </div>
  </section>
</template>
