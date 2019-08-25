import Vue from "vue";
import Router from "vue-router";
import AppointmentsIndex from "./views/AppointmentsIndex.vue";
import ProfessionalSignup from "./views/ProfessionalSignup.vue";
import ProfessionalLogin from "./views/ProfessionalLogin.vue";
import UserLogin from "./views/UserLogin.vue";
import UserSignup from "./views/UserSignup.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/appointments-index",
      name: "appointments-index",
      component: AppointmentsIndex
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/professional-signup",
      name: "professional-signup",
      component: ProfessionalSignup
    },
    {
      path: "/professional-login",
      name: "professional-login",
      component: ProfessionalLogin
    },
    {
      path: "/user-signup",
      name: "user-signup",
      component: UserSignup
    },
    {
      path: "/user-login",
      name: "user-login",
      component: UserLogin
    }
  ]
});
