<template>
  <div class="grid grid-cols-4 gap-4">
    <BookCard v-for="b in books" :key="b.id" :book="b" />
  </div>
</template>

<script setup lang="ts">
import BookCard from './BookCard.vue'
import { defineProps } from 'vue'
interface Book { id: string; title: string; authors: string[]; thumbnail: string; infoLink: string }
const { books } = defineProps<{ books: Book[] }>()
</script>
