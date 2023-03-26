<template>
  <div class="md:container-lg md:mx-auto bg-no-repeat">
    <!-- Grid profile section -->
    <div class="grid row-auto hover:row-span-3 grid-cols-6 gap-3 p-6 m-5">
      <div
        class="col-span-3 text-center relative h-full w-full overflow-hidden rounded-lg hover:opacity-75"
      >
        <img
          class="h-full w-full object-cover object-center"
          src="../assets/img/photo3.png"
          alt="portfolio-pic2"
        />
      </div>
      <div
        class="col-span-3 text-center pt-6 text-gray-400 relative overflow-hidden rounded-lg hover:opacity-75"
      >
        <div class="grid h-screen place-items-center mx-auto p-8">
          <h1 class="text-lime-600 py-5 no-underline">
            I'm a
            <span class="text-amber-400">{{ typeValue }}</span>
            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
          </h1>
        </div>
      </div>
    </div>
    <!-- end Grid profile section -->

    <!-- route pages -->
    <!-- <router-view></router-view> -->
    <!-- endroute pages -->

    <!-- Projects section -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl py-8 sm:py-20 lg:max-w-none lg:py-8 text-rose-600 dark:text-amber-300"
      >
        <h2 class="text-2xl font-bold text-center no-underline py-6">
          Projects
        </h2>

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
            <h3 class="mt-6 text-lg text-blue-600 dark:text-cyan-300">
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
    <!-- Image with tiles -->
    <div class="relative overflow-hidden">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1
              class="font text-4xl font-bold tracking-tight text-gray-900 dark:text-yellow-300 sm:text-6xl"
            >
              Summer styles are finally here
            </h1>
            <p class="mt-4 text-xl text-gray-500 dark:text-lime-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
          </div>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div
                aria-hidden="true"
                class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div
                  class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
                >
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div
                      class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                    >
                      <div
                        class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                      >
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div
                      class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                    >
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div
                      class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                    >
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/"
                class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >Shop Collection</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Image with tiles  -->

    <!-- footer -->
    <div class="footer"></div>
    <!-- end footer -->
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: ["Graduate Consultant", "Data Analyst", "Photographer"],
      typingSpeed: 100,
      erasingSpeed: 150,
      newTextDelay: 1500,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>
<script setup>
const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
</script>
<style scoped>
.my-backgroundImage {
  background: url(../assets/img/photo3.png) no-repeat 50%;
  height: 1450px;
  max-width: 100%;
  opacity: 0.9;
  /* Any additional styling or classes go here */
}

.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
