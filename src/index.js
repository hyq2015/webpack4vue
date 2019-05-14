import Vue from "vue";
import router from "./router";
import App from "./App";
import store from "./store";
new Vue({
    router: router,
    el: "#app",
    store,
    components: {App},
    template: "<App/>"
});
