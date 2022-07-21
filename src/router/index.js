import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
// import Booking from "@/views/Booking";
import AllMovies from "@/views/AllMovies";
import Movie from "@/views/Movie";
import MovieInfo from "@/views/MovieInfo";
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";
import SignUp from "@/views/SignUp";
import History from "@/views/History";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/history",
    name: "History",
    component: History,
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
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
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
