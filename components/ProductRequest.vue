<script setup lang="ts">
interface Props {
  id: number;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  comments?: number | [];
}
const props = defineProps<Props>();
</script>
<template>
  <NuxtLink :to="`/feedbackDetail-${id}`">
    <div
      class="
        productRequest
        my-4
        mx-auto
        p-6
        bg-[#FFFFFF]
        text-[#3A4374] text-sm
        rounded-xl
      "
    >
      <h3 class="font-bold">{{ title }}</h3>
      <p class="my-2.5">{{ description }}</p>
      <span
        class="
          bg-[#F2F4FF]
          text-[#4661E6]
          inline-block
          mb-2.5
          py-1.5
          px-4
          rounded-xl
          font-semibold
        "
        >{{ category }}</span
      >
      <div class="flex justify-between">
        <span
          class="
            flex
            justify-center
            items-center
            py-1.5
            px-3.5
            rounded-xl
            font-bold
            bg-[#F2F4FF]
            text-[#3A4374]
          "
        >
          <img
            class="mr-1"
            src="~/assets/shared/icon-arrow-up.svg"
            alt="icon-arrow-up"
          />
          {{ upvotes }}
        </span>
        <span
          class="
            flex
            justify-center
            items-center
            py-1.5
            px-3.5
            rounded-xl
            font-bold
            bg-[#FFFFFF]
            text-[#3A4374]
          "
        >
          <img
            class="mr-1"
            src="~/assets/shared/icon-comments.svg"
            alt="icon-comments"
          />
          {{ comments?.length }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

