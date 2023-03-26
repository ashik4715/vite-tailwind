<template lang="">
  <div class="md:container text-center p-5 m-20">
    <h1 class="text-amber-400">About Me</h1>
    <p class="pt-10 sm:pt-10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
      accusantium nihil suscipit in. Eaque unde, eveniet velit tenetur ipsa
      quisquam, consequatur quas natus nostrum sint accusamus quibusdam!
      Debitis, beatae quisquam.
    </p>

    <!-- lazy COunter -->
    <div class="py-8 sm:py-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl
          class="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3"
        >
          <div
            v-for="stat in stats"
            :key="stat.id"
            class="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt class="text-base leading-7 dark:text-gray-100 text-gray-600">
              {{ stat.name }}
            </dt>
            <LazyCountNumber
              class="order-first text-3xl font-semibold tracking-tight dark:text-gray-100 text-gray-900 sm:text-5xl"
              :end-number="parseInt(stat.value.replace(/,/g, ''))"
            />
          </div>
        </dl>
      </div>
    </div>
    <!-- end lazy COunter -->

    <!-- trusted teams -->
    <div class="bg-gray-100 py-8 sm:py-8 rounded-md">
      <div class="mx-auto max-w-7xl px-2 lg:px-2">
        <h2
          class="text-center text-lg font-semibold leading-8 dark:text-gray-700 text-gray-900"
        >
          Trusted by the world’s most innovative teams
        </h2>
        <div
          class="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
        </div>
      </div>
    </div>

    <!-- end trusted teams -->
  </div>
</template>
<script>
import LazyCountNumber from "@src/components/LazyCountNumber.vue";
export default {
  name: "About",
  components: {
    LazyCountNumber,
  },
  data() {
    return {
      stats: [
        { id: 1, name: "Happy Clients", value: "110" },
        { id: 2, name: "Projects Completed", value: "220" },
        { id: 3, name: "Hours of Support", value: "15000" },
      ],
    };
  },
};
</script>
<style scoped></style>
