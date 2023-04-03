<template lang="">
  <div class="md:container pt-10 m-20">
    <h2
      class="text-4xl font-bold text-center no-underline text-purple-600 dark:text-cyan-300"
    >
      About Me
    </h2>
    <p class="pt-10 pb-5 sm:pt-10 text-lg text-slate-800 dark:text-white">
      Hello and welcome to my personal portfolio website! My name is Mohammed
      Aydid Hasan, and I am a dedicated and highly skilled professional with a
      passion for computer science, artificial intelligence, and cyber security.
      My unique educational background and diverse work experience have given me
      the knowledge and tools necessary to excel in the world of technology.
    </p>
    <h2
      class="text-xl text-slate-900 dark:text-white underline decoration-emerald-500"
    >
      Education:
    </h2>
    <p class="py-3 sm:py-3 text-lg text-slate-800 dark:text-white">
      I earned my BSc in Computer Science, specializing in Artificial
      Intelligence, from the University of Hertfordshire. This prestigious
      program equipped me with the foundational knowledge and skills needed to
      succeed in the rapidly evolving field of AI. During my time at university,
      I had the opportunity to undertake an industrial placement, further
      enhancing my understanding of real-world applications of computer science.
    </p>
    <p class="py-3 sm:py-3 text-lg text-slate-800 dark:text-white">
      In addition to my primary degree, I completed a summer program in cyber
      security at Nanyang Technological University in Singapore. This enriching
      experience expanded my expertise in network and information security,
      providing me with valuable insights into the world of cyber threats and
      defense mechanisms.
    </p>
    <h2
      class="text-xl text-slate-900 dark:text-white underline decoration-emerald-500"
    >
      Career:
    </h2>
    <p class="py-3 sm:py-3 text-lg text-slate-800 dark:text-white">
      My professional journey began in 2019 as an IT Intern at Parker Hannifin
      Corporation in Hemel Hempstead, where I gained hands-on experience in
      information technology and learned to apply my academic knowledge in a
      corporate environment. This experience prepared me for my next role as a
      Business Intelligence Support Analyst at Graphnet Health, UK, where I
      worked from September 2021 to December 2021. In this position, I honed my
      skills in data analysis and reporting, providing critical support to the
      company's business intelligence initiatives.
    </p>
    <p class="py-3 sm:py-3 text-lg text-slate-800 dark:text-white">
      Since January 2022, I have been working as a Graduate Consultant at Egis
      Group in London, UK. During my time with the company, I have tackled
      various projects and challenges, demonstrating my adaptability and strong
      problem-solving skills. As of February 1st, I have been on a short
      delegation with Egis Group in Dublin, Ireland, where I continue to
      contribute my expertise and grow professionally.
    </p>
    <p class="py-3 sm:py-3 text-lg text-slate-800 dark:text-white">
      As you browse through my portfolio, you will discover the wide range of
      projects I have been involved in, showcasing my passion for technology and
      my commitment to excellence. I am always eager to learn and take on new
      challenges, and I look forward to the opportunities that lie ahead.
    </p>
    <p class="py-3 sm:py-3 text-lg text-slate-800 dark:text-white">
      Thank you for visiting my website, and please feel free to reach out if
      you have any questions or would like to discuss potential collaborations.
    </p>
  </div>
</template>

<script>
import { useHead } from "unhead";
export default {
  name: "About",
  setup() {
    useHead({
      title: "About | Aydid Hasan",
      meta: [
        {
          name: "title",
          content: "About | Aydid Hasan",
        },
        {
          name: "description",
          content: "About Page of Aydid Hasan's Portfolio.",
        },
        {
          property: "og:description",
          content: "About Page of Aydid Hasan's Portfolio.",
        },
        { property: "og:image", content: `summary_large_image` },
        { name: "twitter:card", content: `summary_large_image` },
      ],
    });
  },
};
</script>
<style scoped></style>
