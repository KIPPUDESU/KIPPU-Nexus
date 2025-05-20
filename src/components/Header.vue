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
      <!-- https://www.naiveui.com/zh-CN/dark/components/switch -->
      <n-switch 
        v-model:value="isDark"
        :checked-value="true"
        :unchecked-value="false"
        checked-content="🌙"
        unchecked-content="☀️"
        size="small"
        class="cursor-pointer"
     />
      </div>
    </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
// import { ref } from 'vue';

const isDark = useDark()
// const isDark = ref(false)

</script>

<style>
</style>