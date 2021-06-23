<template>
    <div class="favorite__destination">
        <h2 class="favoriteDestination__name">
            Favorite Destination:{{ getFavoriteDestination }}
        </h2>
    </div>
</template>

<script>
export default {
    name: "FavoriteDestination",
    data() {
        return {
            // fD:favorite destination you can seen on rooter/index.js
            getFavoriteDestination: this.$route.params.fD,
        };
    },
};
</script>

<style src="./FavoriteDestination.scss" lang="scss" scoped></style>
