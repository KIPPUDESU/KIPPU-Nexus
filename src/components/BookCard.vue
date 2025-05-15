<template>
  <n-card hoverable class="w-48">
    <img :src="book.thumbnail" alt="封面" class="w-full h-64 object-cover mb-2" />
    <h3 class="font-semibold">{{ book.title }}</h3>
    <p class="text-sm text-gray-600">{{ book.authors.join(', ') }}</p>
  </n-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
type Book = { title: string; authors: string[]; thumbnail: string }
const { book } = defineProps<{ book: Book }>()
</script>
