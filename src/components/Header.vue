<template>
    <div class="relative">
      <!-- 全屏图片：w-full 保证宽度占满父容器，object-cover 保证图片裁剪填充 -->
      <img 
      src="../../images/merirenko1.png" 
      alt="banner" 
      class="w-full h-192 object-cover" 
      />
      <!-- 标题被绝对定位在图片上：
       left-1/2 与 transform -translate-x-1/2 保证水平居中
       bottom-20 定位于底部偏上 -->
      <!-- left-1/2和 -translate-x-1/2被简化 -->
      <h1 class="
      absolute 
      antialiased
      inset-x-0
      bottom-25 sm:bottom-30 md:bottom-34 lg:bottom-40
      text-center
      text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl
      font-bold 
      z-10
      drop-shadow-xl

      bg-gradient-to-r
      from-violet-300 to-black
      bg-clip-text text-transparent
      opacity-95

      backdrop-blur-xs
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
        :checked-value="true"
        :nochecked-value="false"
        checked-content="🌙"
        unchecked-content="☀️"
        size="small"
        class="cursor-pointer"
     />
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

// 响应式，初始值
// const isDark = ref(false)
// 接受布尔参数，boolean用来明确只能接受t与f（ts类型安全）
// document.documentElement 指的是整个页面的 <html> 元素。
// 调用 classList.toggle('dark', val) 实际上是利用 DOM API 来操作 HTML 元素的 CSS

// function toggleTheme(val: boolean) {
//     // toggle 方法用于添加或移除指定的类名
//     // 如果 val 为 true，则添加 'dark' 类
//   document.documentElement.classList.toggle('dark', val)
// }
// 以上是原有的预设，现在都被tailwind提供的简易形式替代了

const isDark = ref(false)

onMounted(() => {
  // 先利用钩子把保存好的处理了
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme) {
    isDark.value = storedTheme === 'dark'
  }
  else {
    // 初次进入（无本地）检测系统偏好
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  // 由isDark.value决定是否变动dark的类
  document.documentElement.classList.toggle('dark', isDark.value)
})

watch(isDark, (newVal) => {
  document.documentElement.classList.toggle('dark', newVal)
  localStorage.setItem('theme', newVal ? 'dark' : 'light')
})


</script>

<style>
</style>