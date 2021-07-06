<template>
    <div class="home">
        <Banner />
        <FavoriteDestination />
        <FeaturedDestination />
    </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue";
import FavoriteDestination from "@/components/Destination/FavoriteDestination/FavoriteDestination.vue";
import FeaturedDestination from "@/components/Destination/FeaturedDestination/FeaturedDestination.vue";

export default {
    name: "Home",
    components: {
        Banner,
        FavoriteDestination,
        FeaturedDestination,
    },
};
</script>
