<script setup>
defineProps({
  list: {
    type: Object,
  },
});
</script>

<template>
  <section>
    <div class="rounded-md shadow-lg shadow-gray-500/30">
      <img
        :src="list.strCategoryThumb"
        alt=""
        class="object-cover w-full rounded-t-md"
      />
      <div class="p-2">
        <h1 class="text-lg font-semibold">{{ list.strCategory }}</h1>
        <p class="text-md">
          {{ list.strCategoryDescription.slice(0, 110) }}...
        </p>
        <div class="mt-2 text-center w-full">
          <button
            class="bg-red-500 px-3 py-1 rounded-md text-white hover:bg-red-600 transition-colors w-full font-semibold"
          >
            {{ list.strCategory }} Item
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
