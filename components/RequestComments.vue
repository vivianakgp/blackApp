<script setup lang="ts">
interface Props {
  userImg: string;
  name: string;
  userName: string;
  content: string;
  replies?: [];
}

const props = defineProps<Props>();
</script>
<template>
  <!-- bg-[#F2F2F2] -->
  <div>
    <div class="commentCard text-sm my-7">
      <div class="relative flex items-center">
        <img :src="userImg" alt="userImg" class="rounded-full w-10" />
        <div class="ml-4">
          <h4 class="font-bold">{{ name }}</h4>
          <h5>@{{ userName }}</h5>
        </div>
        <button class="absolute right-0 text-[#4661E6] font-bold">Reply</button>
      </div>
      <p class="leading-6 my-7">
        {{ content }}
      </p>
    </div>
    <!-- conditional render -->
    <div v-if="replies != undefined" class="ml-4">
      <div v-for="reply in replies" :key="reply" class="pl-3">
        <div class="relative flex items-center">
          <img
            :src="reply.user.image"
            alt="userImg"
            class="rounded-full w-10"
          />
          <div class="ml-4">
            <h4 class="font-bold">{{ reply.user.name }}</h4>
            <h5>@{{ reply.user.username }}</h5>
          </div>
          <button class="absolute right-0 text-[#4661E6] font-bold">
            Reply
          </button>
        </div>
        <p class="leading-6 my-7">
          <span class="text-[#AD1FEA]"> @{{ reply.replyingTo }}</span>
          {{ reply.content }}
        </p>
      </div>
      <!-- for div -->
    </div>
    <!-- if div -->
  </div>
</template>