import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: () => import("@src/components/HelloWorld.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@views/NotFound.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@views/Contact.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@views/Projects.vue"),
  },
  {
    path: "/privacy-policy",
    name: "Privacy-policy",
    component: () => import("@views/Privacy-policy.vue"),
  },
  {
    path: "/terms-conditions",
    name: "Terms-conditions",
    component: () => import("@views/Terms-conditions.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
