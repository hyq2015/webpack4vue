<template>
    <div class="page-not-found">
        <h1>404</h1>
        <h1>{{ notFoundText }}</h1>
    </div>
</template>

<script>
    import { mapState } from "vuex";
    export default {
        name: "NotFound",
        computed: {
            ...mapState("NotFoundStore", [
                "notFoundText"
            ])
        },
        created () {
            this.$store.dispatch("NotFoundStore/setText", "Page Not Found!");
        }
    };
</script>

<style scoped>
    .page-not-found {
        width: 400px;
        margin: 0 auto;
        color: #fff;
        text-align: center;
        height: 100vh;
        padding-top: 100px;
        box-sizing: border-box;
        background-color: #cb3837;
    }
</style>
