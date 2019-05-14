<template>
    <div class="page-hello">
        <h1>hello world!</h1>
        <h2>
            <a href="https://cn.vuejs.org/v2/guide/">Vue document</a>
        </h2>
        <h2>
            <a href="https://github.com/hyq2015">{{ userUrl }}</a>
        </h2>
        <div
            class="home"
            @click="goHome"
        >
            home
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        name: "HelloWorld",
        computed: {
            ...mapState("HelloWorldStore", [
                "userUrl"
            ]),
            ...mapState("NotFoundStore", [
                "notFoundText"
            ])
        },
        created () {
            this.$store.dispatch("HelloWorldStore/setUerUrl", "Visit Ricky's github url!");
        },
        methods: {
            goHome () {
                this.$router.push("/home");
            }
        }
    };
</script>

<style lang="less" src="../styles/HelloWorld.less" scoped></style>
