<template>
  <div class="mb-2">找到 {{ total }} 本书</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
// const props = defineProps<{ total: number }>()
// 直接解构需要的 props，这样在脚本内就能看到变量的使用
const { total } = defineProps<{ total: number }>()
</script>