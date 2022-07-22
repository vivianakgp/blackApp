<script setup lang="ts">
const config = useRuntimeConfig();
// data from a status in index.vue
const data = await useState("dataProductRequests");
const allRequests = [];
allRequests.push(data.value);
// status planned,inProgress,live
const planned = allRequests[0].filter((req) => {
  return req.status === "planned";
});
const inProgress = allRequests[0].filter((req) => {
  return req.status === "in-progress";
});
const live = allRequests[0].filter((req) => {
  return req.status === "live";
});

interface Props {
  filterByCategory: any;
  isMenuOpen: boolean;
  setIsMenuOpen: any;
  all: any;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="navBar sm:flex sm:items-center sm:my-8 sm:h-48">
    <div
      class="
        relative
        flex
        items-center
        h-[72px]
        px-6
        bg-[url('../assets/suggestions/mobile/background-header.png')]
        bg-cover
        bg-center
        text-white
        sm:items-end
        sm:h-full
        sm:rounded-md
        sm:pb-6
        sm:bg-[url('../assets/suggestions/tablet/background-header.png')]
      "
    >
      <div>
        <h1 class="font-semibold text-[15px]">Frontend Mentor</h1>
        <h3 class="text-slate-200 text-[13px]">Feedback Board</h3>
      </div>
      <button
        @click="setIsMenuOpen"
        type="button"
        class="absolute right-6 sm:hidden"
      >
        <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fill-rule="evenodd">
            <path
              :d="
                isMenuOpen
                  ? 'M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z'
                  : 'M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z'
              "
            />
          </g>
        </svg>
      </button>
    </div>
    <div
      class="
        container
        bg-zinc-100
        absolute
        z-50
        pt-4
        pb-20
        top-[72px]
        right-0
        h-full
        w-80
        overflow-scroll
        sm:relative sm:top-0 sm:flex sm:items-center sm:overflow-hidden sm:p-0
      "
      :class="isMenuOpen ? 'open' : 'close'"
    >
      <!-- sm:bg-transparent -->
      <div
        class="
          filterByCategory
          bg-white
          mx-auto
          mt-8
          w-4/5
          rounded-md
          p-6
          text-center
          sm:p-0 sm:m-0 sm:h-full
        "
      >
        <span @click="all">All</span>
        <span id="UX" @click="filterByCategory">UX</span>
        <span id="UI" @click="filterByCategory">UI</span>
        <span id="enhancement" @click="filterByCategory">Enhancement</span>
        <span id="bug" @click="filterByCategory">Bug</span>
        <span id="feature" @click="filterByCategory">Feature</span>
      </div>
      <div
        class="
          roadMap
          bg-white
          mx-auto
          my-8
          w-4/5
          rounded-md
          p-6
          sm:m-0 sm:h-full
        "
      >
        <div class="flex justify-between mb-6">
          <h3 class="text-[#3A4374] font-semibold text-[18px]">Roadmap</h3>
          <NuxtLink to="/roadMap" class="text-[#4661E6] underline font-medium"
            >View</NuxtLink
          >
        </div>
        <div class="flex justify-between text-[#647196]">
          <p>
            <span
              class="inline-block mr-2 w-2 h-2 rounded-full bg-[#F49F85]"
            ></span
            >Planned
          </p>
          <span class="block font-semibold">{{ planned.length }}</span>
        </div>
        <div class="flex justify-between text-[#647196]">
          <p>
            <span
              class="inline-block mr-2 w-2 h-2 rounded-full bg-[#AD1FEA]"
            ></span
            >In-Progress
          </p>
          <span class="block font-semibold">{{ inProgress.length }}</span>
        </div>
        <div class="flex justify-between text-[#647196]">
          <p>
            <span
              class="inline-block mr-2 w-2 h-2 rounded-full bg-[#62BCFA]"
            ></span
            >Live
          </p>
          <span class="block font-semibold">{{ live.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>