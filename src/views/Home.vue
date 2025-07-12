<template>
  <div
    class="flex flex-col min-h-screen bg-gradient-to-br from-white to-pink-200 dark:from-indigo-500 dark:to-gray-800 transition-colors duration-500 ease-in-out"
  >
    <Header />
    <div
      class="absolute inset-x-0 top-16 sm:top-16 md:top-16 lg:top-16 xl:top-16 flex justify-center z-20 px-4 w-full h-full"
    >
      <KippuTime />
    </div>
    <div
      class="absolute inset-x-0 top-50 sm:top-50 md:top-60 lg:top-70 xl:top-70 flex justify-center z-20 px-4 w-full"
    >
      <!-- <SearchBar @search="handleSearch" /> -->
      <SearchBar />
    </div>
    <div class="p-4">
      <!-- <ResultInfo :total="total" />
      <ResultList :books="books" /> -->
    </div>
    <Footer class="absolute w-full top-193" />
  </div>
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import KippuTime from '../components/KippuTime.vue';
import SearchBar from '../components/SearchBar.vue';
</script>
