<template>
    <div id="nav">
        <NavBar />
    </div>
    <router-view />
</template>
<script>
import NavBar from "@/components/NavBar/NavBar.vue";
// import Footer from "@/components/Footer/Footer.vue";
export default {
    components: {
        NavBar,
        // Footer,
    },
};
</script>

<style lang="scss">
@import url("./views/style/reset.scss");
#app {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
}

#nav {
    padding: 0px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #7552eb;
        }
    }
}
</style>
