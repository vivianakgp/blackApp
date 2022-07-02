<template>
  <footer class="w-full bg-[#1a1a1a] text-white font-light">
    <div class="content-block py-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <h1 class="text-2xl">{{ config.public.appName }}</h1>
        <h2 class="text-xs text-justify text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero possimus
          eaque, ipsa, ab blanditiis porro quis saepe repellat ut officiis sint
          labore fuga quia distinctio vitae tempore! Assumenda, totam eum?
        </h2>
      </div>
      <div>
        <h1 class="text-center text-2xl">Links</h1>
        <ul class="pl-10">
          <li>
            <NuxtLink to="/" class="text-xs hover:text-gray-400">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-xs hover:text-gray-400"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contact" class="text-xs hover:text-gray-400"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div>
        <h1 class="text-center text-2xl">Legal</h1>
        <ul class="pl-10">
          <li>
            <NuxtLink to="/" class="text-xs hover:text-gray-400"
              >Terms.</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="text-xs hover:text-gray-400"
              >Privacy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contact" class="text-xs hover:text-gray-400"
              >Cookies</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div>
        <h1 class="text-2xl">Social Network</h1>
        <h2 class="text-xs text-justify text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero possimus
          eaque, ipsa, ab blanditiis porro quis saepe repellat ut officiis sint
          labore fuga quia distinctio vitae tempore! Assumenda, totam eum?
        </h2>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<style scoped></style>
