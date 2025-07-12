<template>
  <div class="flex items-center justify-center w-9/12">
    <!-- Liquid Glass Container -->
    <div
      class="relative flex items-center w-full p-1 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 shadow-xl shadow-black/25 backdrop-blur-lg transition-all duration-300"
    >
      <!-- 分类选择 -->
      <div class="relative">
        <div
          class="flex items-center justify-between gap-2 h-14 px-5 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 transition-colors text-lg font-semibold text-white"
          @click="toggleDropdown"
        >
          {{ selectedLabel }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="size-5 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
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
            class="absolute z-10 mt-2 w-full rounded-xl shadow-lg overflow-hidden bg-white/30 backdrop-blur-2xl border border-white/10"
          >
            <li
              v-for="option in options"
              :key="option.value"
              @click="selectOption(option)"
              class="p-3 cursor-pointer transition-colors text-white hover:bg-white/30"
            >
              {{ option.label }}
            </li>
          </ul>
        </transition>
      </div>

      <!-- 关键词输入 -->
      <input
        v-model="keyword"
        class="flex-grow w-auto h-14 px-6 bg-transparent focus:outline-none text-xl font-medium text-white placeholder-white/70 placeholder:text-lg"
        placeholder="愿你找到想要的书..."
        @keyup.enter="onSearch"
      />

      <!-- 搜索按钮 -->
      <button
        class="flex items-center justify-center h-14 w-14 rounded-full text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 mr-1"
        @click="onSearch"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          class="text-white transition-colors duration-200"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// 前者用于声明该组件将发射哪些自定义事件，并指定这些事件的参数类型
import { computed, ref } from 'vue';
// 因为现在去掉了home里面的传输逻辑等，所以现在在里添加一个use方便点击跳转
import { useRouter } from 'vue-router';

// defineEmits 声明了一个名为 search 的事件（子传父）
const emit = defineEmits<{
  // type：表示搜索的类别，类型为 string。
  // keyword：表示搜索关键词，类型为 string。
  (e: 'search', payload: { type: string; keyword: string }): void;
}>();

const router = useRouter();

const keyword = ref('');
const type = ref('intitle');
const isOpen = ref<boolean>(false);

interface Option {
  label: string;
  value: string;
}

const options: Option[] = [
  { label: '标题', value: 'intitle' },
  { label: '作者', value: 'inauthor' },
  { label: '出版社', value: 'inpublisher' },
];

const selectedLabel = computed<string>(() => {
  const found = options.find((opt) => opt.value === type.value);
  return found ? found.label : '请选择';
});

// 搜索触发
function onSearch(): void {
  const kw = keyword.value.trim();
  if (kw) {
    emit('search', { type: type.value, keyword: kw });
    // 新增逻辑，给定位的路由传俩值
    router.push({ path: '/booksshelf', query: { type: type.value, keyword: kw } });
  }
}

function toggleDropdown(): void {
  isOpen.value = !isOpen.value;
}

function selectOption(option: Option): void {
  type.value = option.value;
  isOpen.value = false;
}
</script>