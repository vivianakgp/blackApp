<!-- Please remove this file from your project -->
<template>
    <div class="w-full theme-dark">
        <div class="w-full theme-dark-menu h-14">
            <nav class="w-full container-block h-full flex justify-between items-center">
                <!-- Button hamburger menu -->
                <div class="relative md:hidden flex justify-start items-center gap-2" @click="openMobileMenu">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    Menu
                </div>
                <div v-show="showMobileMenu">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div class="fixed inset-0 overflow-hidden">
                        <div class="absolute inset-0 overflow-hidden">
                            <div class="w-10/12 bg-white dark:bg-dark-second shadow h-screen">
                                <div class="p-2 flex justify-end gap-2">
                                    <button type="button" @click="closeMobileMenu">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div class="py-5 border-t-[.2px]">
                                    <NuxtLink
                                        to="/"
                                        class="link-menu-movil"
                                        :class="$route.path === '/' ? 'link-menu-movil-active' : ''"
                                    >
                                        Home
                                    </NuxtLink>
                                    <NuxtLink
                                        to="/about"
                                        class="link-menu-movil"
                                        :class="$route.path === '/about' ? 'link-menu-movil-active' : ''"
                                    >
                                        About
                                    </NuxtLink>
                                    <NuxtLink
                                        to="/about"
                                        class="link-menu-movil"
                                        :class="$route.path === '/contact' ? 'link-menu-movil-active' : ''"
                                    >
                                        Contact
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>logo</div>
                <div class="w-full hidden md:flex justify-end">
                    <ul class="w-full flex justify-end items-center gap-2">
                        <li>
                            <NuxtLink to="/" class="link-menu" :class="$route.path === '/' ? 'link-menu-active' : ''"
                                >Home</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/about"
                                class="link-menu"
                                :class="$route.path === '/about' ? 'link-menu-active' : ''"
                                >About</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink to="/" class="link-menu" :class="$route.path === '/' ? 'link-menu-active' : ''"
                                >Contact</NuxtLink
                            >
                        </li>
                    </ul>
                </div>
                <MenuDarkModeToggle />
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "NuxtNavMenu",
    data() {
        return {
            showMobileMenu: true,
        };
    },
    methods: {
        openMobileMenu() {
            this.showMobileMenu = true;
        },
        closeMobileMenu() {
            this.showMobileMenu = false;
        },
    },
};
</script>
