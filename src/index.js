import Vue from "vue";
import router from "./router";
import App from "./App";
Vue.use(router);
new Vue({
    el: "#app",
    template:"<App/>",
    component:App
});
