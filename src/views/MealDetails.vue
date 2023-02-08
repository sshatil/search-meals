<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import YoutubeBtn from "../components/utils/YoutubeBtn.vue";
import Loading from "@/components/utils/Loading.vue";

const route = useRoute();
const details = ref({});
const isLoading = ref(true);
const paramId = route.params.id;

const fetchMealDetails = async () => {
  try {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${paramId}`
    );
    details.value = data.meals[0];
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchMealDetails();
});
</script>

<template>
  <section>
    <div class="" v-if="isLoading">
      <Loading />
    </div>
    <div class="max-w-[800px] mx-auto p-8" v-else>
      <h1 class="text-4xl font-bold mb-5 text-red-500">
        {{ details.strMeal }}
      </h1>
      <img
        :src="details.strMealThumb"
        :alt="details.strMeal"
        class="max-w-[100%]"
      />
      <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
        <div>
          <strong class="font-bold">Category:</strong> {{ details.strCategory }}
        </div>
        <div>
          <strong class="font-bold">Area:</strong> {{ details.strArea }}
        </div>
        <div v-if="!details.strTags === null">
          <strong class="font-bold">Tags:</strong> {{ details.strTags }}
        </div>
      </div>
      <div class="my-3">
        {{ details.strInstructions }}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul>
            <div v-for="(item, i) in new Array(20)">
              <li v-if="details[`strIngredient${i + 1}`]">
                {{ i + 1 }}: {{ details[`strIngredient${i + 1}`] }}
              </li>
            </div>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-2">Measures</h2>
          <ul v-for="(item, i) in new Array(20)">
            <ul>
              <li v-if="details[`strMeasure${i + 1}`]">
                {{ details[`strMeasure${i + 1}`] }}
              </li>
            </ul>
          </ul>
        </div>
        <div class="mt-4 flex items-center">
          <YoutubeBtn :href="details.strYoutube">Go to YouTube</YoutubeBtn>
          <a
            :href="details.strSource"
            target="_blank"
            class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
          >
            View Original Source
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
