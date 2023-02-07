import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchMeals from "@/views/SearchMeals.vue";
import MealDetails from "@/views/MealDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/search",
      name: "searchMeals",
      component: SearchMeals,
    },
    {
      path: "/details/:id",
      name: "mealDetail",
      component: MealDetails,
    },
  ],
});

export default router;
