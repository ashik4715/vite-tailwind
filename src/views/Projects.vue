<template lang="">
  <div class="md:container text-center p-5 m-20">
    <!-- Projects section -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl py-8 sm:py-20 lg:max-w-none lg:py-8 text-purple-600 dark:text-cyan-300"
      >
        <h2 class="text-4xl font-bold text-center no-underline">Projects</h2>

        <div
          class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
        >
          <div
            v-for="callout in callouts"
            :key="callout.name"
            class="group relative"
          >
            <div
              class="relative h-80 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
            >
              <img
                :src="callout.imageSrc"
                :alt="callout.imageAlt"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <h3 class="mt-6 text-lg text-purple-600 dark:text-cyan-300">
              <a :href="callout.href">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </a>
            </h3>
            <p
              class="text-base font-semibold text-gray-500 dark:text-slate-100"
            >
              {{ callout.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Projects section -->
  </div>
</template>
<script>
export default {
  name: "Projects",
};
</script>
<script setup>
const callouts = [
  {
    name: "Intelligent Infrastructure",
    description: "Network Rail UK's Intelligent Infrastructure project",
    imageSrc: "./src/assets/img/networkrail.jpeg",
    imageAlt: "networkrail.jpeg",
    href: "#",
  },
  {
    name: "M25 / London ring road",
    description: "The busiest and most complex motorway in the UK",
    imageSrc: "./src/assets/img/m25.jpeg",
    imageAlt: "m25.jpeg",
    href: "#",
  },
  {
    name: "Dublin Port & Jack Lynch Tunnel",
    description:
      "Improving the performance and safety of these critical pieces of national infrastructure",
    imageSrc: "./src/assets/img/Dublin-Port-Tunnel.jpeg",
    imageAlt: "Dublin-Port-Tunnel.jpeg",
    href: "#",
  },
];
</script>
