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
    component: () => import("@/pages/Login"),
    // children: [
    //   {
    //     path: "forget",
    //     name: "Forget",
    //     component: () => import("@/pages/forget")
    //   }
    // ]
  },
  {
    path: "/forget",
    name: "Forget",
    component: () => import("@/pages/forget")
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
  console.log(!authentication && (to.name !== "Login" || to.name == "Forget"))
  if(!authentication && (to.name !== "Login" && to.name !== "Forget")) next({ name: "Login" });
  next();
})

export default router
