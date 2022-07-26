import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

// lazy-loaded
const Shop = () => import("../views/ShopView.vue");
const About = () => import("../views/AboutView.vue");
const Profile = () => import("../components/Profile.vue");
const BoardAdmin = () => import("../components/BoardAdmin.vue");
const BoardModerator = () => import("../components/BoardModerator.vue");
const BoardUser = () => import("../components/BoardUser.vue");
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/mod",
    name: "moderator",
    // lazy-loaded
    component: BoardModerator,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
