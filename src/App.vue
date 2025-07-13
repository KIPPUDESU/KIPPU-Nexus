<template>
  <!-- 这样才能渲染路由 -->
  <div class="overlay">
    <router-view v-slot="{ Component, route }">
      <transition
        :name="transitionName"
        mode="in-out"
        @before-enter="beforeEnter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <component :is="Component" :key="route.name" class="view-wrapper" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

//记index
const prevIndex = ref<number>(route.meta.index as number);

//由isForward的真假决定动画方向
const isForward = ref(true);

//监听路由变化
// as number防止接收用的new不承认
watch(
  () => route.meta.index as number,
  (newIndex: number) => {
    // 如果新 index 大于旧 index，就认为是从左往右切换（前进）
    isForward.value = newIndex > prevIndex.value;
    // 更新 prevIndex
    prevIndex.value = newIndex;
  },
);

// 根据isForward决定动画
const transitionName = computed(() => (isForward.value ? 'slide-right' : 'slide-left'));

// 新来
// function beforeEnter(el: HTMLElement) {（这样写会导致传输宽泛不止html的钩子报错）
function beforeEnter(el: Element) {
  const element = el as HTMLElement;
  element.style.position = 'absolute';
  element.style.top = '0';
  element.style.left = '0';
  element.style.width = '100%';
  element.style.height = '100%';
}

// 旧去
function beforeLeave(el: Element) {
  const element = el as HTMLElement;
  element.style.position = 'absolute';
  element.style.top = '0';
  element.style.left = '0';
  element.style.width = '100%';
  element.style.height = '100%';
}

// el提供的是当前正在离开的元素
function leave(el: Element, done: () => void) {
  const element = el as HTMLElement;
  // 空用
  void element;
  setTimeout(() => done());
}
</script>

<style scoped>
/* overlay保证内部可覆盖显示 */
.overlay {
  position: relative;
  overflow-y: auto;
  width: 100%;
  min-height: 100vh;
}

/* 路由组件内容绝对定位 */
.view-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
}

/* 滑动翻页 */

/* 当从主页进入关于页时，新页面从右侧滑入 */
.slide-right-enter-active {
  transition: transform 0.5s ease-in-out;
}
.slide-right-enter-from {
  transform: translateX(100%);
  /* 新页面在上层 */
  z-index: 10;
}
.slide-right-enter-to {
  transform: translateX(0%);
}

/* 透明度变化延迟移除旧的 */
.slide-right-leave-active {
  transition: opacity 0.001s ease 0.1s;
}
.slide-right-leave-from {
  opacity: 1;
}
.slide-right-leave-to {
  opacity: 1;
}

/* 返回点击发生，新页面从左侧滑入 */
.slide-left-enter-active {
  transition: transform 0.5s ease-in-out;
}
.slide-left-enter-from {
  transform: translateX(-100%);
  z-index: 10;
}
.slide-left-enter-to {
  transform: translateX(0%);
}
.slide-left-leave-active {
  transition: opacity 0.001s ease 0.1s;
}
.slide-left-leave-from {
  opacity: 1;
}
.slide-left-leave-to {
  opacity: 1;
}
</style>
