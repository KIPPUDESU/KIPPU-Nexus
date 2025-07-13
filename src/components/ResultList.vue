<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
    <BookCard v-for="b in books" :key="b.id" :book="b" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import BookCard from './BookCard.vue';

interface Book {
  id: string;
  title: string;
  authors: string[];
  thumbnail: string;
  infoLink: string;
}

const { books } = defineProps<{ books: Book[] }>();
</script>