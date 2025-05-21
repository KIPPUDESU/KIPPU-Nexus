<template>
  <div
  class="
  bg-white
  "
  >
    <ResultInfo :total="total" />
    <ResultList :books="books" />
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ResultInfo from './ResultInfo.vue'
import ResultList from './ResultList.vue'
import { fetchBooks } from '../api/books'

const route = useRoute()
const books = ref<Book[]>([])
const total = ref(0)

interface Book { id: string; title: string; authors: string[]; thumbnail: string; infoLink: string }
// 在dom渲染完后直接从搜索组件接受到参数
onMounted(async () => {
  const { type, keyword } = route.query
  if (type && keyword) {
    const { total: t, books: bs } = await fetchBooks(type as string, keyword as string)
    total.value = t
    books.value = bs
  }
})
</script>