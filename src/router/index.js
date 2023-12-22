import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "/tableHeaderProcessing",
        component: () => import("@/views/tableHeaderProcessing/index.vue"),
      },
      {
        path: "/formCreate",
        component: () => import("@/views/formCreate/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
