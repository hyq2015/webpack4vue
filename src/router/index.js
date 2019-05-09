import Router from "vue-router";
import Vue from "vue";
Vue.use(Router);
const HelloWorld = () => import("../components/HelloWorld"),
    routes = [
        {path: "/", component: HelloWorld}
    ],
    router = new Router({
        routes: routes
    });
export default router;
