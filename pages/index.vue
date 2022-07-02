<script setup lang="ts">
const { data } = await useFetch("/api/hello");
const config = useRuntimeConfig();
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="w-full p-4">
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
  </div>
</template>
