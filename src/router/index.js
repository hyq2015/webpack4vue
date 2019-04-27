import Router from "vue-router";
import Vue from "vue";
const HelloWorld = () => import('../components/HelloWorld');
Vue.use(Router);
const routes = [
    {path: "/", component: HelloWorld}
];
const router = new Router({
    routes: routes
});
export default router;
