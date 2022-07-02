<script setup lang="ts">
interface Props {
  description: string;
  cssClasses: string[];
  text?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="w-full p-2 border border-solid border-gray-400 rounded-md">
    <h3 class="text-lg font-medium">{{ description }}</h3>
    <div class="mt-2">
      <p class="font-medium">CSS classes applied:</p>
      <pre>{{ cssClasses }}</pre>
    </div>

    <div class="mt-2">
      <div v-if="text == null" :class="cssClasses.join(' ')">
        <p v-if="text != null" :class="cssClasses.join(' ')">{{ text }}</p>
      </div>
      <p v-if="text != null" :class="cssClasses.join(' ')">{{ text }}</p>
    </div>
  </div>
</template>
