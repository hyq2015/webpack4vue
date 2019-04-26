import Router from "vue-router";
import HelloWorld from "../components/HelloWorld";
const routes = [
    {path: "/", component: HelloWorld}
];
const router = new Router({
    routes: routes
});
export default router;
