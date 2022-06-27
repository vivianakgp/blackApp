<template>
    <div id="app-layout" class="h-full w-full" :class="dark ? 'dark' : 'light'">
        <header class="sticky top-0 h-14">
            <MenuNavMenu />
        </header>
        <main class="min-h-screen w-full theme-dark">
            <Nuxt />
        </main>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["dark"]),
    },
};
</script>
