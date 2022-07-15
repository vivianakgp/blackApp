
<script setup lang="ts">
const config = useRuntimeConfig();
definePageMeta({
  layout: "default",
});
// states
const isSelectOpen = useState("isSelectOpen", () => false);
const requestsList = useState("requestsList", () => []);
const sortType = useState("sortType", () => "Most Upvotes");

const setIsSelectOpen = () => (isSelectOpen.value = !isSelectOpen.value);
const setSortType = (e) => {
  sortType.value = e.target.outerText;
  setIsSelectOpen();
};
// get data and save to localStorage
const getData = async () => {
  if (localStorage.getItem("ProductRequests") !== null) {
    return JSON.parse(localStorage.getItem("ProductRequests"));
  } else {
    const { data } = await useFetch("/api/hello", {
      pick: ["productRequests"],
    });
    const requests = data.value.productRequests;
    localStorage.setItem("ProductRequests", JSON.stringify(requests));
    return requests;
  }
};
// get data with status=suggestions
getData()
  .then((res) => {
    requestsList.value = res.filter(
      (request) => request.status === "suggestion"
    );
  })
  .catch((err) => err);
// sorts requestsList
const sortByMostUpvotes = (e) => {
  requestsList.value = requestsList.value.sort(
    (a, b) => b["upvotes"] - a["upvotes"]
  );
  setSortType(e);
};
const sortByLeastUpvotes = (e) => {
  requestsList.value = requestsList.value.sort(
    (a, b) => a["upvotes"] - b["upvotes"]
  );
  setSortType(e);
};
const sortByMostComments = (e) => {
  requestsList.value = requestsList.value.sort(
    (a, b) => b.comments?.length - a.comments?.length
  );
  setSortType(e);
};
const sortByLestComments = (e) => {
  requestsList.value = requestsList.value.sort(
    (a, b) => a.comments?.length - b.comments?.length
  );
  setSortType(e);
};
</script>

<template>
  <div>
    <Head>
      <Title>{{ config.public.appName }} - Home</Title>
      <Meta
        name="description"
        :content="`Welcome to ${config.public.appName}.`"
      />
    </Head>
    <NavBar />
    <div
      class="
        subMenu
        h-14
        bg-[#373F68]
        flex
        items-center
        justify-between
        px-6
        text-white
        md:rounded-xl md:h-20
      "
    >
      <div class="flex">
        <div class="qtySuggestions bg-violet-400 hidden">
          <p>seggestion counter</p>
        </div>
        <div class="selectBox relative px-1.5">
          <p class="text-xs inline-block">
            Sort by :
            <span class="font-semibold inline-block ml-0.5 mr-1">{{
              sortType
            }}</span>
          </p>
          <button @click="setIsSelectOpen">
            <img src="~/assets/shared/icon-arrow-down.svg" alt="arrow-down" />
          </button>
          <ul
            class="ulSortList absolute top-12 left-0 w-fit bg-white rounded-lg"
            :class="isSelectOpen ? 'open' : 'close'"
          >
            <li @click="sortByMostUpvotes">Most Upvotes</li>
            <li @click="sortByLeastUpvotes">Least Upvotes</li>
            <li @click="sortByMostComments">Most Comments</li>
            <li @click="sortByLestComments">Least Comments</li>
          </ul>
        </div>
      </div>
      <NuxtLink
        to="/feedback"
        class="
          btnAddFeedback
          flex
          items-center
          justify-center
          h-10
          w-36
          px-1
          bg-[#AD1FEA]
          text-white text-[13px]
          font-medium
          border-none
          rounded-md
        "
      >
        <!-- ~ -->
        <img
          class="font-semibold mr-0.5"
          src="~/assets/shared/icon-plus.svg"
          alt="icon-plus"
        />
        Add Feedback
      </NuxtLink>
    </div>
    <div class="requestList px-6 pt-6 pb-7 md:px-0">
      <ProductRequest
        v-for="request in requestsList"
        :key="request.id"
        :id="request.id"
        :title="request.title"
        :description="request.description"
        :category="request.category"
        :upvotes="request.upvotes"
        :comments="request.comments"
      />
    </div>
  </div>
</template>
