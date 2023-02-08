<script setup>
defineProps({
  href: {
    type: String,
  },
});
</script>

<template>
  <div class="">
    <a
      :href="href"
      class="px-2 py-1 text-sm font-medium bg-red-500 rounded-md text-white hover:bg-red-600 transition-colors"
      target="_blank"
    >
      <slot>YouTube</slot>
    </a>
  </div>
</template>
