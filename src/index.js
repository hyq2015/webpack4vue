import Vue from "vue";
import router from "./router";
import App from "./App";
new Vue({
    router:router,
    el: "#app",
    template:"<App/>",
    components:{App}
});
