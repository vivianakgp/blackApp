<script setup lang="ts">
const { data } = await useFetch("/api/hello");
const config = useRuntimeConfig();
</script>

<template>
  <div class="h-full w-full p-4">
    <Head>
      <Title>{{ config.public.appName }}</Title>
      <Meta
        name="description"
        :content="`Welcome to ${config.public.appName}.`"
      />
    </Head>

    <h1
      class="p-4 text-2xl text-center font-semibold text-[#f0ebe3] bg-[#1a1a1a]"
    >
      Welcome to {{ config.public.appName }} with TailwindCSS v3!
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

      <div
        class="min-w-[30%] my-4 flex flex-col justify-evenly items-center gap-4"
      >
        <TailwindFeatureCard
          description="Dynamic CSS classes"
          :css-classes="['p-[1rem]', 'bg-[#1a1a1a]']"
        />

        <TailwindFeatureCard
          description="Coloured box shadows"
          :css-classes="[
            'p-4',
            'bg-blue-500',
            'shadow-lg',
            'shadow-blue-500/50',
          ]"
        />

        <TailwindFeatureCard
          description="Fancy underlines"
          :css-classes="[
            'text-lg',
            'text-center',
            'underline',
            'decoration-indigo-500',
            'decoration-wavy',
            'decoration-2',
          ]"
          text="Wavy underline"
        />
      </div>
    </div>
  </div>
</template>
