<template>
    <div class="relative">
      <!-- 全屏图片：w-full 保证宽度占满父容器，object-cover 保证图片裁剪填充 -->
      <img src="../../images/tohobanner.png" alt="banner" class="w-full h-auto object-cover" />
      <!-- 标题被绝对定位在图片上：
       left-1/2 与 transform -translate-x-1/2 保证水平居中
       bottom-20 定位于底部偏上 -->
      <h1 class="absolute left-1/2 bottom-4 transform -translate-x-1/2 text-white text-4xl z-10">
        KIPPU NEXUS
      </h1>
      <n-layout-header
    class="flex items-center justify-between px-4"
    >
    以下定义切换黑暗模式的开关
    <n-switch v-model:checked="isDark" @update:checked="toggleTheme" />
    </n-layout-header>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>