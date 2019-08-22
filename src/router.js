import Vue from "vue";
import Router from "vue-router";
import AppointmentsIndex from "./views/AppointmentsIndex.vue";
import Login from "./views/Login.vue";
import UserSignup from "./views/UserSignup.vue";
import ProfessionalSignup from "./views/ProfessionalSignup.vue";

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
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/user-signup",
      name: "user-signup",
      component: UserSignup
    },
    {
      path: "/professional-signup",
      name: "professional-signup",
      component: ProfessionalSignup
    }
  ]
});
