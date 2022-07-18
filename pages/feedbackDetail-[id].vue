<script setup lang="ts">
const config = useRuntimeConfig();
// get id of selected request
const route = useRoute();
const ID: number = +route.params.id;
// state
const selectedRequest = useState("selectedRequest", () => []);
const requestComments = useState("requestComments", () => []);
// testing edit

// data from localStorage
const data = async () => {
  return await JSON.parse(localStorage.getItem("ProductRequests"));
};
// set state
data()
  .then((res) => {
    selectedRequest.value = res.filter((request) => request.id === ID);
    // console.log(selectedRequest.value);
  })
  .then(() => {
    requestComments.value = selectedRequest.value[0].comments;
  });

//onMounted(() => {});
</script>
<template>
  <div class="p-6 text-[#3A4374]">
    <Head>
      <Title>{{ config.public.appName }} - Feedback Detail</Title>
      <!-- <Meta
        name="description"
        :content="`Welcome to ${config.public.appName}.`"
      /> -->
    </Head>
    <div class="flex justify-between">
      <button class="flex items-center">
        <img
          src="~/assets/shared/icon-arrow-left.svg"
          alt="arrow-left"
          class="mr-3"
        />
        <NuxtLink to="/" class="text-sm font-semibold text-[#647196]"
          >Go Back</NuxtLink
        >
      </button>
      <NuxtLink
        to="/editFeedback"
        class="
          btnAddFeedback
          flex
          items-center
          justify-center
          h-10
          w-32
          px-0.5
          bg-[#4661E6]
          text-white text-xs
          font-medium
          border-none
          rounded-md
        "
      >
        Edit Feedback
      </NuxtLink>
    </div>
    <div class="mt-10">
      <ProductRequest
        v-for="request in selectedRequest"
        :key="request.id"
        :id="request.id"
        :title="request.title"
        :description="request.description"
        :category="request.category"
        :upvotes="request.upvotes"
        :comments="request?.comments"
      />
    </div>
    <div class="my-9 mx-auto p-6 bg-[#FFFFFF] text-sm rounded-xl">
      <h3 class="font-bold text-lg">{{ requestComments?.length }} Comments</h3>
      <RequestComments
        v-for="comment in requestComments"
        :key="comment.id"
        :userImg="comment.user.image"
        :name="comment.user.name"
        :userName="comment.user.username"
        :content="comment.content"
        :replies="comment?.replies"
      />
    </div>
    <div>add comment</div>
  </div>
</template>
