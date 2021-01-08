import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/pages/Home"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/auth",
    name: "Login",
    component: () => import("@/pages/Login")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// set navigation guard for routes

router.beforeEach(async (to, from, next) => {
  const { state: { authentication } } = (await import("@/store")).default;
  if(!authentication && to.name !== "Login") next({ name: "Login" });
  next();
})

export default router
