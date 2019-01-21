import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/login/Login.vue";
import Logout from "../components/login/Logout.vue";
import Signup from "../components/login/Signup.vue";
import Forum from "../components/Forum.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/login", component: Login },
    { path: "/logout", component: Logout },
    { path: "/signup", component: Signup },
    { path: "/forum", component: Forum, name: "forum" }
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: "history"
});

export default router;
