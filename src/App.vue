<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/layout/Navbar.vue";
</script>

<template>
  <div class="">
    <nav>
      <Navbar />
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
