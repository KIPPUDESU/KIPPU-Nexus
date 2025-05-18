<template>
  <div class="flex flex-col min-h-screen
  bg-gradient-to-br from-purple-500 to-gray-100
  ">
    <Header @search="handleSearch" />
    <div class="
      absolute
      inset-x-0
      top-15 sm:top-25 md:top-40 lg:top-55 xl:top-95
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
// 谷歌book
import { fetchBooks } from '../api/books'

interface Book { id: string; title: string; authors: string[]; thumbnail: string }

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
