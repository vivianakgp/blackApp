
<script setup lang="ts">

const getData = async() => {
if(localStorage.getItem("requestsList") !== null){
  console.log("local storage is not null")
  return  JSON.parse(localStorage.getItem("requestsList"));

}else{
  console.log("storage is null")
  const { data } = await useFetch("/api/hello",{pick:["productRequests"]});
  const requests = data.value.productRequests
  localStorage.setItem("requestsList",JSON.stringify(requests))
  return requests
  
}
};


const requestsList = await getData().then( res => {
  return res
}).catch((err)=>console.log(err))
console.log(requestsList)


const config = useRuntimeConfig();
definePageMeta({
  layout: "default",
  
});


</script>

<template>
<div class="Suggestion">
      <div class="subMenu">
          <div>
            <div class="qtySuggestions">
              <p>seggestion counter</p>
            </div>
            <div class="selectBox">
              <p>select box</p>
            </div>
          </div>
          <button class="btnAddFeedback">
            Add Feedback
          </button>
      </div>
      <div class="requestList">
        <ProductRequest
          v-for="request in requestsList"
          :key="request.id"
          :title="request.title"
          :category="request.category"
          :description="request.description"
        />
      </div>
</div>

</template>

  <!-- <div class="w-full p-4">
    <Head>
      <Title>{{ config.public.appName }} - Home</Title>
      <Meta
        name="description"
        :content="`Welcome to ${config.public.appName}.`"
      />
    </Head>

    <h1
      class="p-4 text-2xl text-center font-semibold text-[#f0ebe3] bg-[#1a1a1a]"
    >
      Welcome to {{ config.public.appName }} with TailwindCSS v3! Joakaz
    </h1>

    <p
      class="max-w-[22rem] mx-auto my-4 p-2 text-center text-lg font-medium bg-gray-300"
    >
      Data from /api/hello: {{ data.message }}
    </p>

    <div class="flex flex-col items-center justify-center">
      <h2 class="text-xl font-medium">
        Check out the different TailwindCSS v3 features:
      </h2>

      <div class="my-4 flex flex-col justify-evenly items-center gap-4">
        <TailwindFeatureCard
          description="Dynamic CSS classes"
          :css-classes="['p-[1rem]', 'bg-[#1a1a1a]']"
        />
      </div>
    </div>
  </div> -->

