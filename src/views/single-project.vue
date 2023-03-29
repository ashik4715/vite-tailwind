<template lang="">
  <div class="mt-20 pt-5">
    <!-- Projects section -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl py-8 sm:py-20 lg:max-w-none lg:py-8 text-purple-600 dark:text-cyan-300"
      >
        <h2 class="text-4xl font-bold text-center no-underline">
          {{ destination.name }}
        </h2>

        <div class="grid row-auto hover:row-span-3 grid-cols-6 gap-3 p-6 m-5">
          <div
            class="col-span-3 text-center relative h-full w-full overflow-hidden rounded-lg hover:opacity-75"
          >
            <div class="relative h-80 w-full overflow-hidden rounded-lg">
              <img
                :src="`/images/${destination.image}`"
                :alt="destination.slug"
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div
            class="col-span-3 text-justify relative h-full w-full overflow-hidden rounded-lg"
          >
            <div
              class="text-base font-semibold text-gray-500 dark:text-slate-100"
            >
              <div v-html="destination.description"></div>
              <!-- I worked as an Assistant Project Manager at Network Rail UK as
              part of the Intelligent Infrastructure project. My role involved
              supporting the delivery of cutting-edge technologies to improve
              the performance and efficiency of the railway network. During my
              time at Network Rail UK, I was responsible for:
              <ul class="px-3 py-6 list-disc list-inside">
                <li>
                  Supporting the Project Manager in the delivery of project
                  objectives, including scope, schedule, budget, and quality.
                </li>
                <li>
                  Contributing to the development of project plans, risk
                  assessments, and other project documentation.
                </li>
                <li>
                  Coordinating project activities across multiple teams and
                  stakeholders, both internal and external to Network Rail UK.
                </li>
                <li>
                  Providing regular project status updates to senior management
                  and stakeholders, including progress reports and risk
                  assessments.
                </li>
              </ul>
              Through my work at Network Rail UK, I gained valuable experience
              in project management, stakeholder engagement, and the
              implementation of innovative technologies in a complex and dynamic
              environment. I also developed a deep understanding of the
              challenges and opportunities involved in delivering major
              infrastructure projects, particularly those related to the
              transportation sector. This experience has given me a unique
              perspective on the importance of effective project management and
              collaboration in delivering successful outcomes for both the
              organization and the wider community. -->
            </div>
          </div>
        </div>

        <!-- end projects div -->
      </div>
    </div>
    <!-- End Projects section -->
  </div>
</template>
<script>
import sourceData from "@src/data/data.json";
export default {
  name: "single-project",
  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.destinationId
      );
    },
  },
};
</script>
