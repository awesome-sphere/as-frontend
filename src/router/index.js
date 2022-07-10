import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
// import Booking from "@/views/Booking";
import AllMovies from "@/views/AllMovies";
import Movie from "@/views/Movie";
import MovieInfo from "@/views/MovieInfo";
import Login from "@/views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/all-movies",
    name: "AllMovies",
    component: AllMovies,
  },
  {
    path: "/movie/:id",
    name: "MovieInfo",
    component: MovieInfo,
  },
  {
    path: "/book-movie/:id",
    name: "Movie",
    component: Movie,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
