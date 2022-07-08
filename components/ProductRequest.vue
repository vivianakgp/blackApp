<script>
export default {
  props: ["title","category","description"]
}
</script>
<template>
    <div>
        <p>{{title}}</p>
        <p>{{category}}</p>
        <p>{{description}}</p>

    </div>
</template>

