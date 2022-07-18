<script setup lang="ts">
// data to edit
const requestToEdit = useState("selectedRequest");
// data from localStorage
// const productRequests = useState("ProductRequests", () => [])
// const data = async () => {
//   return await JSON.parse(localStorage.getItem("ProductRequests"));
// };
// data().then(()=>{ productRequests})

console.log("requestToEdit:", requestToEdit.value);
//states
const isSelectCategoryOpen = useState("isSelectCategoryOpen", () => false);
const editCategory = useState("editCategory", () => "feature");
const isSelectStatusOpen = useState("isSelectStatusOpen", () => false);
const updateStatus = useState("updateStatus", () => "planned");
const titleEdit = useState("titleEdit", () => requestToEdit[0]?.title);
console.log("valor del titulo:", typeof requestToEdit.value[0].title);

// set states
const setIsSelectCategoryOpen = () => {
  isSelectCategoryOpen.value = !isSelectCategoryOpen.value;
};
const setEditCategory = (e) => {
  editCategory.value = e.target.id;
  setIsSelectCategoryOpen();
};
const setIsSelectStatusOpen = () => {
  isSelectStatusOpen.value = !isSelectStatusOpen.value;
};
const setUpdateStatus = (e) => {
  updateStatus.value = e.target.id;
  console.log(updateStatus.value);
  setIsSelectStatusOpen();
};
</script>
<template>
  <div class="p-6 text-[#3A4374]">
    <Head>
      <Title> - Edit Feedback</Title>
      <!--<Meta
        name="description"
        :content="`Welcome to ${config.value.public.appName}.`"
      />-->
    </Head>
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
    <form
      class="form rounded-xl bg-white mx-auto px-6 pb-12 mt-10"
      ref="feedbackForm"
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
      <h2 class="mb-8 font-semibold">
        Editing ‘{{ requestToEdit[0]?.title }}’
      </h2>
      <div>
        <label for="title" class="font-semibold">Feedback Title</label>
        <p class="mb-4 mt-1 font-normal text-[#647196]">
          Add a short, descriptive headline
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
          "
          type="text"
          id="title"
          required
          autoCapitalize="on"
          autofocus
          :value="requestToEdit[0]?.title"
        />
      </div>
      <div class="my-10">
        <h4 class="font-semibold">Category</h4>
        <p class="mb-3.5 mt-1 font-normal text-[#647196]">
          Choose a category for your feedback
        </p>
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
            <p>{{ editCategory }}</p>
            <button type="button" @click="setIsSelectCategoryOpen">
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
            :class="isSelectCategoryOpen ? 'open' : 'close'"
          >
            <li id="UI" @click="setCategory">UI</li>
            <li id="UX" @click="setCategory">UX</li>
            <li id="Enhancement" @click="setCategory">enhancement</li>
            <li id="Bug" @click="setCategory">bug</li>
            <li id="Feature" @click="setCategory">feature</li>
          </ul>
        </div>
      </div>
      <!-- update status -->
      <div class="my-10">
        <h4 class="font-semibold">Update Status</h4>
        <p class="mb-3.5 mt-1 font-normal text-[#647196]">
          Change feature state
        </p>
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
            <p>{{ updateStatus }}</p>
            <button type="button" @click="setIsSelectStatusOpen">
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
            :class="isSelectStatusOpen ? 'open' : 'close'"
          >
            <li id="Live" @click="setUpdateStatus">live</li>
            <li id="In-Progress" @click="setUpdateStatus">in-progress</li>
            <li id="Planned" @click="setUpdateStatus">planned</li>
          </ul>
        </div>
      </div>
      <!-- detail -->
      <div>
        <label for="description" class="font-semibold">Feedback Detail</label>
        <p class="mb-3.5 mt-1 font-normal text-[#647196]">
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea
          class="
            w-full
            h-[120px]
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
          :value="requestToEdit[0]?.description"
        />
      </div>
      <div class="containerBtn">
        <button
          type="submit"
          class="bg-[#AD1FEA] w-full my-2.5 h-11 text-white rounded-xl"
        >
          Save Changes
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
        >
          Cancel
        </span>
        <button
          type="submit"
          class="bg-[#D73737] w-full my-2.5 h-11 text-white rounded-xl"
        >
          Delete
        </button>
      </div>
    </form>
  </div>
</template>
