
<script setup lang="ts">
// import { Body, Html } from "nuxt/dist/head/runtime/components";
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
    <div
      v-if="isMenuOpen"
      class="
        absolute
        top-[72px]
        inset-x-0
        bottom-0
        bg-[#00000073]
        z-50
        sm:hidden
      "
    ></div>

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
        sm:rounded-xl sm:h-20
      "
    >
      <div class="flex">
        <div class="qtySuggestions hidden sm:block sm:flex sm:mr-3">
          <svg width="23" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.5 2.274c2.237 0 4.339.854 5.923 2.408a8.123 8.123 0 012.465 5.839 8.084 8.084 0 01-1.7 4.979 8.457 8.457 0 01-3.652 2.71l-.31.112.003.826h.369c.262 0 .475.21.475.469a.47.47 0 01-.39.46l-.085.008h-.365l.004 1.02h.36c.263 0 .476.21.476.469a.47.47 0 01-.39.461l-.085.008h-.358l.006 1.487a.466.466 0 01-.381.46l-.094.01H9.23a.478.478 0 01-.466-.378l-.01-.092.006-1.487h-.357a.472.472 0 01-.475-.47.47.47 0 01.39-.46l.085-.008h.361l.004-1.02h-.365a.472.472 0 01-.475-.468.47.47 0 01.39-.462l.085-.007h.368l.004-.826a8.452 8.452 0 01-3.996-2.867 8.08 8.08 0 01-1.666-5.056c.032-2.127.923-4.152 2.511-5.7 1.508-1.471 3.448-2.322 5.493-2.416l.324-.009h.06zm1.791 19.769H9.709l-.004 1.02h3.59l-.004-1.02zm-.007-1.958H9.716l-.003 1.02h3.574l-.003-1.02zM11.5 3.212h-.054c-3.946.027-7.327 3.325-7.384 7.2-.048 3.266 2.14 6.192 5.322 7.118.174.05.3.193.332.364l.008.088-.004 1.166h3.56l-.004-1.166a.47.47 0 01.34-.452c3.134-.912 5.323-3.794 5.323-7.01a7.197 7.197 0 00-2.185-5.173A7.453 7.453 0 0011.5 3.212zm.829 1.782a.4.4 0 01.401.397v.322c.48.12.932.307 1.346.552l.228-.226a.405.405 0 01.569 0L16.046 7.2a.393.393 0 010 .56l-.23.228c.247.41.437.858.557 1.333h.323a.4.4 0 01.402.397v1.645a.4.4 0 01-.402.396h-.323c-.12.476-.31.924-.557 1.333l.23.228a.393.393 0 010 .56l-1.173 1.163a.405.405 0 01-.57 0l-.227-.227a5.02 5.02 0 01-1.346.553v.322a.4.4 0 01-.401.396H10.67a.4.4 0 01-.402-.396v-.322a5.022 5.022 0 01-1.345-.553l-.228.227a.405.405 0 01-.569 0L6.954 13.88a.393.393 0 010-.56l.23-.228a4.924 4.924 0 01-.557-1.333h-.324a.4.4 0 01-.401-.396V9.719a.4.4 0 01.401-.397h.324c.12-.475.31-.923.557-1.333l-.23-.228a.393.393 0 010-.56L8.127 6.04a.405.405 0 01.569 0l.228.226a5.021 5.021 0 011.345-.552V5.39a.4.4 0 01.402-.397zM11.5 7.721c-1.572 0-2.846 1.263-2.846 2.82 0 1.558 1.274 2.82 2.846 2.82s2.846-1.262 2.846-2.82c0-1.557-1.274-2.82-2.846-2.82zm11.025 4.152c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008h-.498a.472.472 0 01-.475-.469.47.47 0 01.39-.461l.085-.008h.498zm-21.552 0c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008H.475A.472.472 0 010 12.342a.47.47 0 01.39-.461l.085-.008h.498zM3.112 3.45l.074.06.46.451c.185.183.186.48 0 .663a.476.476 0 01-.596.062l-.075-.06-.459-.451a.465.465 0 01-.001-.663.48.48 0 01.597-.062zm17.373.062c.162.16.182.408.06.59l-.061.073-.46.45a.476.476 0 01-.67 0 .464.464 0 01-.06-.59l.06-.074.46-.45a.48.48 0 01.671 0zM11.5 0c.233 0 .427.166.467.384l.008.085v.49a.472.472 0 01-.475.468.473.473 0 01-.467-.384l-.008-.084v-.49c0-.26.213-.469.475-.469z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </svg>
          <span class="text-white font-semibold ml-2">
            {{ suggestionRequests.length }} Suggestions
          </span>
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
    <div class="requestList px-6 pt-6 pb-7 sm:px-0">
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
