<script setup lang="ts">
const config = useRuntimeConfig();
//get data
const productRequests = JSON.parse(localStorage.getItem("ProductRequests"));
//states
const isSelectBoxOpen = useState("isSelectBoxOpen", () => false);
const title = useState("title", () => "");
const description = useState("description", () => "");
const category = useState("category", () => "feature");
// set states
const setIsSelectBoxOpen = () => {
  isSelectBoxOpen.value = !isSelectBoxOpen.value;
};
const setTitle = (e) => {
  title.value = e.target.value;
  console.log(title.value);
};
const setDescription = (e) => {
  description.value = e.target.value;
  console.log(description.value);
};
const setCategory = (e) => {
  category.value = e.target.id;
  console.log(category.value);
  setIsSelectBoxOpen();
};
//get last id + 1
const generateId = () => {
  const requestIds = productRequests.map((elem) => elem.id);
  return Math.max(...requestIds) + 1;
};
// reset new request values
const clearForm = () => {
  title.value = "";
  description.value = "";
  category.value = "feature";
};
// fn submit form
const createRequest = (e) => {
  e.preventDefault();
  const request = {
    id: generateId(),
    title: title.value,
    category: category.value,
    upvotes: 0,
    status: "suggestion",
    description: description.value,
    // commnets:[]
  };
  productRequests.push(request);
  localStorage.setItem("ProductRequests", JSON.stringify(productRequests));
  clearForm();
  // console.log(productRequests);
};
</script>

<template>
  <div class="p-6 text-[#3A4374]">
    <Head>
      <Title> - Feedback</Title>
      <!-- <Meta
        name="description"
        :content="`Welcome to ${config.value.public.appName}.`"
      /> -->
    </Head>
    <button class="flex items-center">
      <img
        src="~/assets/shared/icon-arrow-left.svg"
        alt="arrow-left"
        class="mr-1"
      />
      <NuxtLink to="/">Go Back</NuxtLink>
    </button>
    <form
      class="form rounded-xl bg-white mx-auto px-6 pb-12 mt-10"
      ref="feedbackForm"
      v-on:submit="createRequest"
    >
      <button
        class="
          iconPlus
          relative
          top-[-25px]
          flex
          items-center
          justify-center
          rounded-full
        "
      >
        <img
          src="~/assets/shared/icon-plus.svg"
          alt="arrow-left"
          class="mr-1"
        />
      </button>
      <h2 class="mb-8 font-bold">Create New Feedback</h2>
      <div>
        <label for="title" class="font-bold">Feedback Title</label>
        <p class="mb-3.5 font-normal">Add a short, descriptive headline</p>
        <input
          class="
            w-full
            h-12
            border-none
            bg-slate-200
            rounded-md
            p-6
            font-normal
          "
          type="text"
          id="title"
          required
          autoCapitalize="on"
          autofocus
          :value="title"
          @change="setTitle"
        />
      </div>
      <div>
        <h4 class="font-bold">Category</h4>
        <p class="mb-3.5 font-normal">Choose a category for your feedback</p>
        <div
          class="
            relative
            w-full
            h-12
            bg-[#F7F8FD]
            mb-3.5
            px-6
            pt-3.5
            rounded-md
            border-none
            font-normal
          "
        >
          <div class="flex justify-between items-center">
            <p>{{ category }}</p>
            <button type="button" @click="setIsSelectBoxOpen">
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1l4 4 4-4"
                  stroke="#4661E6"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <ul
            class="
              categoryList
              absolute
              top-12
              z-50
              left-0
              right-0
              rounded-md
              bg-white
            "
            :class="isSelectBoxOpen ? 'open' : 'close'"
          >
            <li id="UI" @click="setCategory">UI</li>
            <li id="UX" @click="setCategory">UX</li>
            <li id="Enhancement" @click="setCategory">enhancement</li>
            <li id="Bug" @click="setCategory">bug</li>
            <li id="Feature" @click="setCategory">feature</li>
          </ul>
        </div>
      </div>
      <div>
        <label for="description" class="font-bold">Feedback Detail</label>
        <p class="mb-3.5 font-normal">
          Include any specific comments on what should be improved, added, etc.
        </p>
        <input
          class="
            w-full
            h-12
            border-none
            bg-slate-200
            rounded-md
            p-6
            font-normal
            mb-6
            h-64
          "
          type="text"
          id="description"
          required
          autoCapitalize="on"
          maxLength="250"
          :value="description"
          @change="setDescription"
        />
      </div>
      <div class="containerBtn">
        <button
          type="submit"
          class="bg-[#AD1FEA] w-full my-2.5 h-11 text-white rounded-xl"
        >
          Add Feedback
        </button>
        <span
          class="
            bg-[#3A4374]
            flex
            items-center
            justify-center
            h-11
            text-white
            rounded-xl
          "
          @click="clearForm"
        >
          Cancel
        </span>
      </div>
    </form>
  </div>
</template> 
