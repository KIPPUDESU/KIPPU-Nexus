<template>
  <!-- <a href="https://books.google.com/books?id=<BOOK_ID>&printsec=frontcover
"> -->
 <a
    :href="book.infoLink"
    target="_blank"
    rel="noopener"
    class="block hover:shadow-lg transition-shadow duration-200"
  >
    <n-card hoverable class="w-48
    drop-shadow-xl
    ">
    <img :src="book.thumbnail || kippuimg" 
    alt="封面" 
    class="w-full h-64 object-cover mb-2" />
    <h3 class="font-semibold">{{ book.title }}</h3>
    <p class="
    text-sm text-gray-600">{{ book.authors.join(', ') }}
  </p>
  </n-card>
</a>
  
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
type Book = { 
  title: string; 
  authors: string[]; 
  thumbnail: string
  infoLink: string;
}
const { book } = defineProps<{ book: Book }>()

const kippuimg = '../images/BK.png'
</script>
