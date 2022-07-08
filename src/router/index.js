import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AllMovies from "../views/AllMovies";
import MovieInfo from "@/views/MovieInfo";
import Movie from "@/views/Movie";

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
    path: "/movie-info/:id",
    name: "MovieInfo",
    component: MovieInfo,
  },
  {
    path: "/book-movie/",
    name: "MovieInfo",
    component: Movie,
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
