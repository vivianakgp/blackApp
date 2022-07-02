<template>
  <div class="w-full sticky top-0 z-20">
    <div class="bg-[#1a1a1a] text-white font-light">
      <div class="content-block flex justify-between items-center">
        <button
          type="button"
          class="flex justify-start items-center gap-1 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          Menu
        </button>
        <div>{{ config.public.appName }}</div>
        <div class="flex justify-end items-center gap-3">
          <ul class="hidden md:flex justify-end items-center gap-3">
            <li>
              <NuxtLink to="/" class="link-menu">Home</NuxtLink>
            </li>
            <li><NuxtLink to="/about" class="link-menu">About</NuxtLink></li>
            <li>
              <NuxtLink to="/contact" class="link-menu">Contact</NuxtLink>
            </li>
          </ul>
          <button
            type="button"
            class="bg-blue-400 rounded-full text-xs h-9 w-9 my-2"
          >
            JBO
          </button>
          <button type="button" class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
</script>
