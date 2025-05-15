<template>
  <Layout>
    <Header />
    <div class="p-4">
      <SearchBar @search="handleSearch" />
      <ResultInfo :total="total" />
      <ResultList :books="books" />
    </div>
    <Footer />
  </Layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import SearchBar from '../components/SearchBar.vue'
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
