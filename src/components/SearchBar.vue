<template>
  <div class="
  flex 
  items-center 
  justify-center 
  p-4
  bg-transparent
  w-[60vw]
  drop-shadow-2xl
  ">
    <!-- 分类选择 -->
    <div class="relative inline-block w-1/8">
    <div
      class="
      flex
      text-sm 
      text-gray-800 
      bg-white
      border 
      border-violet-400 
      rounded-md 
      p-2 
      shadow-md 
      focus:outline-none 
      focus:ring-2 
      focus:ring-violet-300 
      backdrop-blur-sm 
      mr-1 transition-all duration-300 ease-in-out transform scale-95 hover:scale-100 cursor-pointer
      opacity-85
      drop-shadow-2xl
      items-center justify-between gap-1
      "
      @click="toggleDropdown"
    >
      {{ selectedLabel }}
      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-4 fill-gray-400"><path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg></a>
    </div>
    <!-- 此处提供过渡动画编辑 -->
     <!-- 进入时的整体过渡
      进入前的初始状态（淡入且微缩）
      进入后的完成状态
      开时的整体过渡
      离开前的初始状态
      离开后的完成状态
      -->
    <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
    <ul
      v-if="isOpen"
      class="absolute z-10 mt-1 w-full bg-white bg-opacity-90 border border-violet-400 rounded-md shadow-lg backdrop-blur-lg"
    >
      <li
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="p-2 hover:bg-violet-100 cursor-pointer transition duration-200"
      >
        {{ option.label }}
      </li>
    </ul>
    </transition>
  </div>

    <!-- 关键词输入 -->
    <input
      class="
      flex-1
      bg-white bg-opacity-80
      border border-violet-400
      py-2 px-3
      focus:outline-none
      focus:ring-2
      focus:ring-violet-300
      rounded-l-md
      backdrop-blur-xs
      shadow-md
      text-gray-800
      placeholder-gray-500
      opacity-85
      drop-shadow-2xl
      "
      v-model="keyword"
      placeholder="愿你找到想要的书..."
      @keyup.enter="onSearch"
    />

    <!-- 搜索按钮 -->
    <button
      class="
      py-2 px-6
      rounded-r-md
      bg-gradient-to-r
      from-blue-950 to-black
      dark:from-violet-300 dark:to-gray-700
      text-white
      focus:outline-none
      focus:ring-2
      focus:ring-violet-300
      shadow-lg
      transition-all
      duration-300
      opacity-85
      drop-shadow-2xl
      "
      @click="onSearch"
    >
      <a href="#">
        <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
    </button>
  </div>
</template>



<script setup lang="ts">
// 前者用于声明该组件将发射哪些自定义事件，并指定这些事件的参数类型
import { defineEmits, ref, computed } from 'vue';

// 因为现在去掉了home里面的传输逻辑等，所以现在在里添加一个use方便点击跳转
import { useRouter } from 'vue-router'
const router = useRouter()

// defineEmits 声明了一个名为 search 的事件（子传父）
const emit = defineEmits<{
    // type：表示搜索的类别，类型为 string。
    // keyword：表示搜索关键词，类型为 string。
  (e: 'search', payload: { type: string; keyword: string }): void
}>()

const keyword = ref('')
const type = ref('intitle')

interface Option { label: string; value: string }
const options: Option[] = [
  { label: '标题', value: 'intitle' },
  { label: '作者', value: 'inauthor' },
  { label: '出版社', value: 'inpublisher' }
]

// 封装
// function onSearch() {
//   if (keyword.value.trim()) {
//     // 检测到有效的关键词，调用 emit('search', { ... }) 发射一个 search 事件
//     // 接受上面传下来的type和keyword
//     emit('search', { type: type.value, keyword: keyword.value.trim() })
//   }
// }

// 搜索触发
function onSearch(): void {
  const kw = keyword.value.trim()
  if (kw) {
    emit('search', { type: type.value, keyword: kw })
    // 新增逻辑，给定位的路由传俩值
    router.push({ path: '/booksshelf', query: { type: type.value, keyword: kw } })
  }
}

const isOpen = ref<boolean>(false)

function toggleDropdown(): void {
  isOpen.value = !isOpen.value
}

function selectOption(option: Option): void {
  type.value = option.value
  isOpen.value = false
}

const selectedLabel = computed<string>(() => {
  const found = options.find(opt => opt.value === type.value)
  return found ? found.label : '请选择'
})
</script>

