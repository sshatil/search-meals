<script setup>
import { RouterLink } from "vue-router";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
</script>

<template>
  <main>
    <div class="">
      <input type="text" class="border-gray-400 border rounded-md w-full" />
      <div class="flex justify-center gap-2">
        <RouterLink to="/" v-for="letter in letters">
          {{ letter }}
        </RouterLink>
      </div>
    </div>
  </main>
</template>
