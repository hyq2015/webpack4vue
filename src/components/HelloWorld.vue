<template>
    <div class="page-hello">
        <h1>
            hello world!
        </h1>
        <h2>
            <a href="https://cn.vuejs.org/v2/guide/">
                Vue document
            </a>
        </h2>
        <h2>
            <a href="https://github.com/hyq2015">
                Visit Ricky's github url!
            </a>
        </h2>
        <div @click="goHome">
            home
        </div>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        methods: {
            goHome () {
                this.$router.push("/home");
            }
        }
    };
</script>

<style lang="less" src="../styles/HelloWorld.less" scoped></style>
