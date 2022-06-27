<template>
    <div>index home</div>
</template>

<script lang="ts">
export default {
    layout: "site",
    name: "IndexPage",
    head: {
        title: process.env.APP_NAME + " - Home",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Home Page",
            },
        ],
    },
};
</script>
