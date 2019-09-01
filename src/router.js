import Vue from "vue";
import Router from "vue-router";
import ProfessionalSignup from "./views/ProfessionalSignup.vue";
import ProfessionalLogin from "./views/ProfessionalLogin.vue";
import UserLogin from "./views/UserLogin.vue";
import UserSignup from "./views/UserSignup.vue";
import AppointmentsIndex from "./views/AppointmentsIndex.vue";
import AppointmentsShow from "./views/AppointmentsShow.vue";
import AppointmentsEdit from "./views/AppointmentsEdit.vue";
import AppointmentsNew from "./views/AppointmentsNew.vue";
import ProfessionalsIndex from "./views/ProfessionalsIndex.vue";
import UsersIndex from "./views/UsersIndex.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
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
      path: "/professionals",
      name: "ProfessionalsIndex",
      component: ProfessionalsIndex
    },
    {
      path: "/users",
      name: "UsersIndex",
      component: UsersIndex
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
    },
    {
      path: "/appointments",
      name: "appointments-index",
      component: AppointmentsIndex
    },
    {
      path: "/appointments/new",
      name: "appointments-new",
      component: AppointmentsNew
    },
    {
      path: "/appointments/:id",
      name: "appointments-show",
      component: AppointmentsShow
    },
    {
      path: "/appointments/:id/edit",
      name: "appointments-edit",
      component: AppointmentsEdit
    }
  ]
});
