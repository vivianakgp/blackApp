<script setup lang="ts">
const config = useRuntimeConfig();

const isMenuOpen = useState("isMenuOpen", () => false);
const setIsMenuOpen = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
// const options = reactive({});
// definePageMeta({});
</script>

<template>
  <div class="navBar md:flex md:items-center md:my-8 md:h-48">
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
        md:items-end md:h-full md:rounded-md md:pb-6
      "
    >
      <div>
        <h1 class="font-semibold text-[15px]">Frontend Mentor</h1>
        <h3 class="text-slate-200 text-[13px]">Feedback Board</h3>
      </div>
      <button
        @click="setIsMenuOpen"
        type="button"
        class="absolute right-6 md:hidden"
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
        top-[72px]
        right-0
        h-full
        w-80
        md:relative md:top-0 md:flex md:items-center md:bg-transparent
      "
      :class="isMenuOpen ? 'open' : 'close'"
    >
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
          md:p-0 md:m-0 md:h-full
        "
      >
        <span>All</span>
        <span>UX</span>
        <span>UI</span>
        <span>Enhancement</span>
        <span>Bug</span>
        <span>Feature</span>
      </div>
      <div
        class="
          roadMap
          bg-white
          mx-auto
          mt-8
          w-4/5
          rounded-md
          p-6
          md:p-0 md:m-0 md:h-full
        "
      ></div>
    </div>
  </div>
</template>