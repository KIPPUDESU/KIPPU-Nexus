<template>
  <div class="text-center text-2xl font-bold text-gray-800 my-8">
    找到 {{ Booktotal }} 本书
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

// const props = defineProps<{ total: number }>()
// 直接解构需要的 props，这样在脚本内就能看到变量的使用
const { total } = defineProps<{ total: number }>();

const Booktotal = computed(() => (total > 999 ? '999+' : total));
</script>
