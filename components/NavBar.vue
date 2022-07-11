<script setup lang="ts">
const config = useRuntimeConfig();

const isMenuOpen = useState("isMenuOpen", () => false)
//console.log()
const changeMenuState = () => {
  isMenuOpen.value = !isMenuOpen.value
  console.log("click event:", isMenuOpen.value)
}
const options= reactive({
  yes: true,
})
definePageMeta({
  
});

</script>


<template>
  <div class="navBar md:flex md:items-center md:my-8 md:h-48">
    <div class="header relative h-20  px-6 bg-purple-500 text-white flex items-center md:items-end md:h-full md:rounded-md md:pb-6">
      <div> 
        <h1 class="font-bold">Frontend Mentor</h1>
        <h3 class="text-slate-200 ">Feedback Board</h3>
      </div>
      <button @click="changeMenuState" type="button" class="absolute right-6 md:hidden" > 
        <!-- <img 
        src="~/assets/shared/mobile/icon-hamburger.svg"
        alt="icon" 
        /> -->
        <svg 
        width="20" 
        height="17" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <g fill="#FFF" fill-rule="evenodd">
          <path 
          :d=" isMenuOpen === true ? 'M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z' : 'M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z'"
          />
        </g>
        </svg>
      </button>
    </div> 
    <div class="container bg-zinc-100 absolute z-50 top-20 right-0 h-full w-80 md:relative md:top-0 md:flex md:items-center md:bg-transparent"
    :class=" isMenuOpen === true ? 'open' : 'close'">
      <div class="filterByCategory bg-white mx-auto mt-8 w-4/5 rounded-md p-6 text-center md:p-0 md:m-0 md:h-full">
        <span>All</span>
        <span>UX</span>
        <span>UI</span>
        <span>Enhancement</span>
        <span>Bug</span>
        <span>Feature</span>
      </div>
      <div class="roadMap bg-white mx-auto mt-8 w-4/5 rounded-md p-6 md:p-0 md:m-0 md:h-full"></div>
    </div>
  </div>

</template>
// d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"

 <!-- src="~/assets/shared/mobile/icon-hamburger.svg" -->


  <!-- <div class="w-full sticky top-0 z-20">
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
  </div> -->