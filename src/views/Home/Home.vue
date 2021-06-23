<template>
    <div class="home">
        <Banner />
        <FavoriteDestination/>
    </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue";
import FavoriteDestination from "@/components/Destination/FavoriteDestination/FavoriteDestination.vue";

export default {
    name: "Home",
    components: {
        Banner,
        FavoriteDestination,
    },
};
</script>
