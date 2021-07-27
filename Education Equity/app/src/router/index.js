import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/Admin.vue"),
    meta: {
      requiresAuth: true
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((rec) => rec.meta.requiresAuth)) {
    let user = store.state.user;
    if (user) {
      next();
    } else {
      next('/login');//next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
