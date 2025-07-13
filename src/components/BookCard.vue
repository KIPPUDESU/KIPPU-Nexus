<template>
  <a
    :href="book.infoLink"
    target="_blank"
    rel="noopener"
    class="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 bg-white"
  >
    <n-card :bordered="false" class="w-full h-full flex flex-col p-0">
      <img :src="book.thumbnail || kippuimg" alt="封面" class="w-full h-64 object-cover rounded-t-lg mb-2" />
      <div class="p-4 flex-grow flex flex-col justify-between">
        <h3 class="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">{{ book.title }}</h3>
        <p class="text-sm text-gray-600 line-clamp-1">{{ book.authors.join(', ') }}</p>
      </div>
    </n-card>
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type Book = {
  title: string;
  authors: string[];
  thumbnail: string;
  infoLink: string;
};

const { book } = defineProps<{ book: Book }>();

const kippuimg = '../images/BK.png';
</script>