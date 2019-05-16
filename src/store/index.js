import Vue from "vue";
import Vuex from "vuex";
import NotFoundStore from "./modules/NotFoundStore";
import HelloWorldStore from "./modules/HelloWorldStore";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
    modules: {
        NotFoundStore,
        HelloWorldStore
    },
    strict: debug
});
