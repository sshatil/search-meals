<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import Category from "./Category.vue";
import Loading from "./utils/Loading.vue";

const categoryList = ref([]);
const isLoading = ref(true);

const fetchCategoryList = async () => {
  try {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    categoryList.value = data.categories;
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchCategoryList();
});
</script>

<template>
  <section>
    <div class="" v-if="isLoading">
      <Loading />
    </div>
    <section
      class="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7"
    >
      <div class="" v-for="list in categoryList">
        <Category :list="list" />
      </div>
    </section>
  </section>
</template>
