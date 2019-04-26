import Router from "vue-router";
import Vue from "vue";
import HelloWorld from "../components/HelloWorld";
Vue.use(Router);
const routes = [
    {path: "/", component: HelloWorld}
];
const router = new Router({
    routes: routes
});
export default router;
