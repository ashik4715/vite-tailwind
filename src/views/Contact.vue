<template lang="">
  <div class="md:container text-center pt-10 m-20">
    <h2
      class="text-4xl font-bold text-center no-underline text-purple-600 dark:text-cyan-300"
    >
      Contact
    </h2>
    <div
      class="grid grid-flow-row auto-rows-max hover:row-span-3 grid-cols-6 gap-3 p-6 m-5 text-black dark:text-gray-100"
    >
      <div
        class="col-span-3 text-center relative h-full w-full overflow-hidden rounded-lg hover:opacity-75"
      >
        <div class="mx-auto mb-6 flex items-center justify-center">
          <p class="text-2xl text-bold">Get connected with me</p>
        </div>
      </div>
      <div
        class="col-span-3 text-center justify-evenly inline-flex relative h-full w-full overflow-hidden rounded-lg"
      >
        <div class="mb-4 items-center hover:opacity-75">
          <a
            href="https://www.facebook.com/dragon.slayer1010"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="w-10 h-10"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              ></path></svg
          ></a>
        </div>
        <div class="mb-4 items-center hover:opacity-75">
          <a
            href="https://www.linkedin.com/in/mohammed-aydid-hasan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
              />
            </svg>
          </a>
        </div>
        <div
          class="mb-4 h-10 w-10 items-center rounded-full bg-inherit hover:opacity-75"
        >
          <a
            href="https://github.com/MohammedAydid"
            class="text-slate-400 hover:text-gray-500"
          >
            <span class="sr-only">GitHub</span>
            <svg
              class="h-10 w-10"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useHead } from "unhead";
export default {
  name: "Contact",
  setup() {
    useHead({
      title: "Contact | Aydid Hasan",
      meta: [
        {
          name: "title",
          content: "Contact | Aydid Hasan",
        },
        {
          name: "description",
          content: "Contact Page of Aydid Hasan's Portfolio.",
        },
        {
          property: "og:description",
          content: "Contact Page of Aydid Hasan's Portfolio.",
        },
        { property: "og:image", content: `summary_large_image` },
        { name: "twitter:card", content: `summary_large_image` },
      ],
    });
  },
};
</script>
<style scoped></style>
