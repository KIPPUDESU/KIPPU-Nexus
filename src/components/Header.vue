<template>
    <div class="relative">
      <!-- 全屏图片：w-full 保证宽度占满父容器，object-cover 保证图片裁剪填充 -->
      <img 
      src="../../images/tohobanner.png" 
      alt="banner" 
      class="w-full h-aotu object-cover" 
      />
      <div class="
      absolute
      inset-x-0
      top-95
      flex
      justify-center
      z-20 px-4
      ">
        <SearchBar @search="handleSearch" />
      </div>
      <!-- 标题被绝对定位在图片上：
       left-1/2 与 transform -translate-x-1/2 保证水平居中
       bottom-20 定位于底部偏上 -->
      <!-- left-1/2和 -translate-x-1/2被简化 -->
      <h1 class="
      absolute 
      inset-x-0
      bottom-24 sm:bottom-26 md:bottom-28 lg:bottom-30
      text-center
      text-3xl sm:text-4xl md:text-5xl lg:text-8xl xl:text-9xl
      font-bold 
      z-10
      drop-shadow-xl

      bg-gradient-to-r
      from-violet-300 to-black
      bg-clip-text text-transparent
      ">
        KIPPU NEXUS
      </h1>
      <div class="
      absolute
      top-4
      right-4
      z-20
      ">
      <n-switch 
        v-model:checked="isDark" 
        @update:checked="toggleTheme"
        size="small"
        class="cursor-pointer"
     />
      </div>
    </div>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue'
import { defineEmits, ref } from 'vue'

const emit = defineEmits<{
    // type：表示搜索的类别，类型为 string。
    // keyword：表示搜索关键词，类型为 string。
  (e: 'search', payload: { type: string; keyword: string }): void
}>()

// 实现 handleSearch，接收到 SearchBar 传递的数据后，向父组件发射 search 事件
function handleSearch(payload: { type: string; keyword: string }) {
  emit('search', payload)
}

// 响应式，初始值
const isDark = ref(false)
// 接受布尔参数，boolean用来明确只能接受t与f（ts类型安全）
// document.documentElement 指的是整个页面的 <html> 元素。
// 调用 classList.toggle('dark', val) 实际上是利用 DOM API 来操作 HTML 元素的 CSS
function toggleTheme(val: boolean) {
    // toggle 方法用于添加或移除指定的类名
    // 如果 val 为 true，则添加 'dark' 类
  document.documentElement.classList.toggle('dark', val)
}

</script>

<style>
@import "tailwindcss"
</style>