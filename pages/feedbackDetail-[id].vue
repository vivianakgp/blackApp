<script setup lang="ts">
const config = useRuntimeConfig();
// get id of selected request
const route = useRoute();
const ID: number = +route.params.id;
// state
const selectedRequest = useState("selectedRequest", () => []);
const requestComments = useState("requestComments", () => []);

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
const addComment = (e) => {
  console.log(e.target.value);
};
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
    <div class="my-9 mx-auto px-6 py-12 bg-[#FFFFFF] text-sm rounded-xl">
      <h3 class="text-[#3A4374] text-lg font-semibold">Add Comment</h3>
      <textarea
        name="addCommnet"
        id="addCommnet"
        cols="30"
        rows="10"
        placeholder="Type your comment here"
        class="text-[#8C92B3] bg-[#F7F8FD] rounded-md h-20 w-full p-5 my-10"
      ></textarea>
      <div class="flex justify-between">
        <p class="text-[#647196]">250 Characters left</p>
        <button
          class="
            h-[40px]
            w-[130px]
            text-[#F2F4FE]
            bg-[#AD1FEA]
            rounded-xl
            font-semibold
          "
          @click="addComment"
        >
          Post Comment
        </button>
      </div>
    </div>
  </div>
</template>
//  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sunt esse sapiente voluptatem nihil cumque eligendi dicta quaerat cupiditate numquam id dignissimos, quisquam iusto sed corrupti impedit reprehenderit atque enim dolor totam rerum mollitia est! Vel numquam adipisci magnam dicta dolorem, doloremque eos vitae, voluptas quas quo nemo, epudiandae sunt quod perferendis nesciunt nam minima corrupti deleniti labore? 