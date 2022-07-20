
<script setup lang="ts">
const config = useRuntimeConfig();
definePageMeta({
  layout: "default",
});
// states
const isMenuOpen = useState("isMenuOpen", () => false);
const dataProductRequests = useState("dataProductRequests", () => []);
const suggestionRequests = useState("suggestionRequests", () => []);
const isSelectOpen = useState("isSelectOpen", () => false);
const sortType = useState("sortType", () => "Most Upvotes");
// set states
const setIsSelectOpen = () => (isSelectOpen.value = !isSelectOpen.value);
const setSortType = (e) => {
  sortType.value = e.target.outerText;
  setIsSelectOpen();
};
// get data and save to localStorage
const getData = async () => {
  if (localStorage.getItem("ProductRequests") !== null) {
    console.log("no es null hay algo en local");
    return JSON.parse(localStorage.getItem("ProductRequests"));
  } else {
    console.log("es null local vacio");
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
    dataProductRequests.value = res;
    requestsWithStatusSuggestion();
    // suggestionRequests.value = res.filter(
    //   (request) => request.status === "suggestion"
    // );
    // console.log(suggestionRequests.value);
  })
  .catch((err) => err);
// only requests with suggestion status
const requestsWithStatusSuggestion = () => {
  suggestionRequests.value = dataProductRequests.value.filter((request) => {
    return request.status === "suggestion";
  });
};
// set isMenuOpen
const setIsMenuOpen = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

//suggestionRequests state filter by category-runs from navbar
function filterByCategory(e) {
  requestsWithStatusSuggestion();
  suggestionRequests.value = suggestionRequests.value.filter((req) => {
    return req.category === e.target.id;
  });
  setIsMenuOpen();
}
// all suggestion requests and close menu
const getAllRequest = () => {
  requestsWithStatusSuggestion();
  setIsMenuOpen();
};

// sort suggestionRequests
const sortByMostUpvotes = (e) => {
  suggestionRequests.value = suggestionRequests.value.sort(
    (a, b) => b["upvotes"] - a["upvotes"]
  );
  setSortType(e);
};
const sortByLeastUpvotes = (e) => {
  suggestionRequests.value = suggestionRequests.value.sort(
    (a, b) => a["upvotes"] - b["upvotes"]
  );
  setSortType(e);
};
const sortByMostComments = (e) => {
  suggestionRequests.value = suggestionRequests.value.sort(
    (a, b) => b.comments?.length - a.comments?.length
  );
  setSortType(e);
};
const sortByLestComments = (e) => {
  suggestionRequests.value = suggestionRequests.value.sort(
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
    <NavBar
      :filterByCategory="filterByCategory"
      :isMenuOpen="isMenuOpen"
      :setIsMenuOpen="setIsMenuOpen"
      :all="getAllRequest"
    />
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
        <img
          class="font-semibold mr-0.5"
          src="~/assets/shared/icon-plus.svg"
          alt="icon-plus"
        />
        Add Feedback
      </NuxtLink>
    </div>
    <div class="requestList px-6 pt-6 pb-7 md:px-0">
      <div
        v-if="suggestionRequests.length === 0"
        class="bg-white flex flex-col items-center px-9 py-20 rounded-xl"
      >
        <img
          src="~/assets/suggestions/illustration-empty.svg"
          alt="illustration-empty"
          class="mb-10"
        />
        <h3 class="text-[#3A4374] text-lg font-semibold mb-4">
          There is no feedback yet.
        </h3>
        <p class="text-center font-normal text-[#647196] mb-4">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
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
          <img
            class="font-semibold mr-0.5"
            src="~/assets/shared/icon-plus.svg"
            alt="icon-plus"
          />
          Add Feedback
        </NuxtLink>
      </div>
      <ProductRequest
        v-for="request in suggestionRequests"
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
