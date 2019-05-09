/* eslint-disable */
import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);
const HelloWorld = () => import("../components/HelloWorld"),
    Page404 = () => import("../components/404"),
    routes = [
        {path: "/", component: HelloWorld},
        {path: "/404", component: Page404}
    ],
    router = new Router({
        mode: "history",
        routes: routes
    });

function isValidPage (path) {
    let flag = false;
    for (let item of routes) {
        if (item.path === path) {
            flag = true;
            break;
        }
    }
    return flag;
}

router.beforeEach((to, from, next) => {
    console.log(to.path);
    if (!isValidPage(to.path)) {
        next("/404");
    } else {
        next();
    }
});
export default router;
