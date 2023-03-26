<template>
  <div class="bg-zinc-200">
    <header class="absolute inset-x-0 top-0 z-50 w-full">
      <nav
        :class="{ scrolled: !view.atTopOfPage }"
        class="fixed flex w-full items-center bg-gray-100 dark:bg-gray-800 justify-between flex-wrap m-auto top-0 animated shadow-2xl shadow-cyan-400/20 p-8 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Company"
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <router-link
            class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            to="/about"
            >About</router-link
          >
          <router-link
            class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            to="/contact"
            >Contact</router-link
          >
          <router-link
            class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            to="/projects"
            >Projects</router-link
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <div class="toggle-button flex space-x-5">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                @click="toggleDark()"
                class="sr-only peer"
              />
              <div
                class="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-200"
                >Dark</span
              >
            </label>
            <a
              href="/login"
              class="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >Log in <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="logo"
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-800"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  to="/about"
                  >About</router-link
                >
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  to="/contact"
                  >Contact</router-link
                >
                <router-link
                  class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  to="/projects"
                  >Projects</router-link
                >
              </div>
              <div class="py-6">
                <a
                  href="/login"
                  class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>

  <div class="md:container-lg md:mx-auto bg-no-repeat">
    <div v-if="showRouterView == false">
      <HelloWorld />
    </div>
    <div v-else><router-view></router-view></div>
  </div>
</template>

<script>
import { ref } from "vue";
import HelloWorld from "@src/components/HelloWorld.vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useDark, useToggle } from "@vueuse/core";
export default {
  components: {
    HelloWorld,
  },
  setup() {
    const showRouterView = ref(false);

    return {
      showRouterView,
    };
  },
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    };
  },

  // a beforeMount call to add a listener to the window
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
};
</script>
<script setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
const mobileMenuOpen = ref(false);
</script>
<style scoped>
nav {
  z-index: 10;
}

nav.scrolled {
  border-bottom: 0px;
}
</style>
