<template>
  <header class="text-black dark:text-white py-10 text-center">
    <p class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl:text-10xl font-mono font-bold drop-shadow-2xl">
      {{ time }}
    </p>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const time = ref('');

function updateClock(): void {
  // const clockElement: HTMLElement | null = document.getElementById('clock')

  const now = new Date();
  time.value = now.toLocaleTimeString();
}

// 存储定时器 ID，以便后续清除
let timerId: number;

// 组件挂载后执行一次更新时间，并开启每秒更新一次的定时器
onMounted(() => {
  updateClock(); // 立即更新一次，避免初始延迟
  timerId = window.setInterval(updateClock, 1000);
});

// 组件卸载前清除定时器，避免内存泄漏
onUnmounted(() => {
  clearInterval(timerId);
});

// updateClock();
// setInterval(updateClock, 1000);
</script>
