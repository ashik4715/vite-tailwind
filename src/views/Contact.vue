<template lang="">
  <div class="md:container text-center pt-10 m-20">
    <h2 class="text-4xl font-bold text-center no-underline text-cyan-500">
      Contact
    </h2>
    <div class="grid row-auto hover:row-span-3 grid-cols-6 gap-3 p-6 m-5">
      <div
        class="col-span-3 text-center relative h-full w-full overflow-hidden rounded-lg hover:opacity-75"
      >
        <div class="mx-auto mb-6 flex items-center justify-center">
          <p class="text-2xl text-bold text-black dark:text-gray-100">
            Get connected with me
          </p>
        </div>
      </div>
      <div
        class="col-span-auto text-center inline-flex relative h-full w-full overflow-hidden rounded-lg"
      >
        <div
          class="mx-auto mb-4 h-10 w-10 items-center justify-center rounded-full bg-cyan-300 hover:opacity-75"
        >
          <a
            href="https://www.facebook.com/dragon.slayer1010"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="h-15 w-15 fill-red-700"
              src="../assets/img/i-facebook.png"
              alt="facebook"
          /></a>
        </div>
        <div
          class="mx-auto mb-4 h-10 w-10 items-center justify-center rounded-full bg-sky-400 hover:opacity-75"
        >
          <img
            class="h-15 w-15 fill-red-700"
            src="../assets/img/i-linkedin.png"
            alt="linkedin"
          />
        </div>
        <div
          class="mx-auto mb-4 h-10 w-10 items-center justify-center rounded-full bg-white hover:opacity-75"
        >
          <img
            class="h-15 w-15 fill-red-700"
            src="../assets/img/i-youtube.png"
            alt="youtube"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
};
</script>
<style scoped></style>
