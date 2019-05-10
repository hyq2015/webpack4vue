import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import App from "./App";
Vue.use(Vuex);
new Vue({
    router: router,
    el: "#app",
    components: {App},
    template: "<App/>"
});
