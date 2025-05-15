<template>
    <n-layout-header
    class="flex items-center justify-between px-4"
    >
    <h1>KIPPU NEXUS</h1>
    以下定义切换黑暗模式的开关
    <n-switch v-model:checked="isDark" @update:checked="toggleTheme" />
    </n-layout-header>
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