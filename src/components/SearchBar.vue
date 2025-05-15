<template>
  <div class="flex space-x-2">
    <n-select
      v-model:value="type"
      :options="[
        { label: '标题', value: 'intitle' },
        { label: '作者', value: 'inauthor' },
        { label: '出版社', value: 'inpublisher' }
      ]"
    />
    <n-input
      v-model:value="keyword"
      placeholder="输入关键词"
      @keyup.enter="onSearch"
      clearable
    />
    <n-button @click="onSearch">搜索</n-button>
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
