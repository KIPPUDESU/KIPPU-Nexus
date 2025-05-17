<template>
  <div
    class="flex items-center max-w-3xl w-full bg-white bg-opacity-70 shadow-md rounded-lg overflow-hidden"
  >
    <!-- 分类选择 -->
    <n-select
      class="min-w-[5.5rem] border-r border-gray-300 h-full"
      v-model:value="type"
      :options="[
        { label: '标题', value: 'intitle' },
        { label: '作者', value: 'inauthor' },
        { label: '出版社', value: 'inpublisher' }
      ]"
      size="medium"
    />

    <!-- 关键词输入 -->
    <n-input
      class="flex-1 border-none focus:ring-0 focus:outline-none"
      v-model:value="keyword"
      placeholder="输入关键词"
      @keyup.enter="onSearch"
      clearable
      size="medium"
    />

    <!-- 搜索按钮 -->
    <n-button
      type="primary"
      ghost
      size="medium"
      class="rounded-none rounded-r-lg h-full"
      @click="onSearch"
    >
      搜索
    </n-button>
  </div>
</template>


<script setup lang="ts">
// 前者用于声明该组件将发射哪些自定义事件，并指定这些事件的参数类型
import { defineEmits, ref } from 'vue';

// defineEmits 声明了一个名为 search 的事件（子传父）
const emit = defineEmits<{
    // type：表示搜索的类别，类型为 string。
    // keyword：表示搜索关键词，类型为 string。
  (e: 'search', payload: { type: string; keyword: string }): void
}>()

const keyword = ref('')
const type = ref('intitle')

// 封装

function onSearch() {
  if (keyword.value.trim()) {
    // 检测到有效的关键词，调用 emit('search', { ... }) 发射一个 search 事件
    // 接受上面传下来的type和keyword
    emit('search', { type: type.value, keyword: keyword.value.trim() })
  }
}
</script>

<style>
@import "tailwindcss"
</style>