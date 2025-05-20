<template>
  <div class="flex flex-col min-h-screen
  bg-gradient-to-br
  from-white to-pink-200
   dark:from-indigo-500 dark:to-gray-800
  transition-colors duration-500 ease-in-out
  ">
    <Header @search="handleSearch" />
    <div class="
      absolute
      inset-x-0
      top-16 sm:top-16 md:top-16 lg:top-16 xl:top-16
      flex
      justify-center
      z-20 px-4
      w-full
      ">
        <KippuTime />
      </div>
    <div class="
      absolute
      inset-x-0
      top-50 sm:top-50 md:top-60 lg:top-70 xl:top-80
      flex
      justify-center
      z-20 px-4
      w-full
      ">
        <SearchBar @search="handleSearch" />
      </div>
    <div class="p-4">
      <ResultInfo :total="total" />
      <ResultList :books="books" />
    </div>
    <Footer class="mt-auto" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ResultInfo from '../components/ResultInfo.vue'
import ResultList from '../components/ResultList.vue'
import KippuTime from '../components/KippuTime.vue'
// 谷歌book
import { fetchBooks } from '../api/books'

interface Book { id: string; title: string; authors: string[]; thumbnail: string; infoLink: string }

const books = ref<Book[]>([])
const total = ref(0)

// function handleSearch({ type, keyword }: { type: string; keyword: string }) {
//   // TODO: 调用 API，暂用假数据模拟
//   total.value = 0
//   books.value = []
// }

async function handleSearch({ type, keyword }: { type: string; keyword: string }) {
  try {
    const { total: t, books: bs } = await fetchBooks(type, keyword)
    total.value = t
    books.value = bs
  } catch (e) {
    console.error(e)
  }
}
</script>