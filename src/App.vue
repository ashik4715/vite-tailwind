<script setup>
import Headless from "./views/Headless.vue";
import { useHead } from "unhead";

useHead({
  title: "Homepage | Aydid Hasan",
  meta: [
    {
      name: "title",
      content: "Homepage | Aydid Hasan",
    },
    {
      name: "description",
      content: "Homepage of Aydid Hasan's Portfolio.",
    },
    {
      property: "og:description",
      content: "Homepage of Aydid Hasan's Portfolio.",
    },
    { property: "og:image", content: `summary_large_image` },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>

<template>
  <Headless />
  <!-- <HelloWorld /> -->
</template>
<style scoped></style>
