
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
      <Head>
        <Title>{{ config.public.appName }} - Home</Title>
        <Meta
          name="description"
          :content="`Welcome to ${config.public.appName}.`"
        />
      </Head>
      <NavBar />
      <div class="subMenu h-14 bg-[#373F68] flex items-center justify-between px-6 text-white md:rounded-xl md:h-20">
          <div class="flex">
            <div class="qtySuggestions bg-violet-400 hidden">
              <p>seggestion counter</p>
            </div>
            <div class="selectBox bg-pink-400 relative px-1.5 font-bold">
              <p>select box</p>
            </div>
          </div>
          <NuxtLink 
            to="/feedback" 
            class="btnAddFeedback flex items-center justify-center h-10 w-36 px-1 bg-[#AD1FEA] text-white font-semibold border-none rounded-md">
            <img 
            class="font-semibold mr-0.5"
            src="~/assets/shared/icon-plus.svg" 
            alt="icon-plus"
            >
            Add Feedback
          </NuxtLink>
      </div>
      <div class="requestList px-6 md:px-0">
        <ProductRequest
          v-for="request in requestsList"
          :key="request.id"
          :title="request.title"
          :description="request.description"
          :category="request.category"
          :upvotes="request.upvotes"
          :comments="request.comments"
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

    <h1   title="titulooooo"
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

