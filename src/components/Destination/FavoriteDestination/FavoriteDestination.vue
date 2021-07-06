<template>
    <div>
        <h2 class="mt-5 mb-5 destination__title">
            Destination favorite
        </h2>
        <div class="destination__cardWrap row container-fluid">
            <div
                class=" cardWrap col-sm-6 col-md-4 col-lg-4 col-xl-3"
                v-for="(destination, index) in destinations"
                :key="index"
            >
                <div
                    @click="favoriteDestination(destination.name)"
                    class="card mb-2 card__title"
                >
                    <img
                        class="card-img-top"
                        :src="destination.imgUrl"
                        alt="Card image cap"
                    />
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ destination.name }}
                        </h5>
                        <p class="card-text">
                            {{ destination.description.substr(0, 65) }}...
                        </p>
                        <button class="card__btn">
                            Visiter {{ destination.name }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FavoriteDestination",
    components: {},
    computed: {
        destinations() {
            return this.$store.state.destinations;
        },
    },
    methods: {
        // featuredDestination() {
        //     this.$router.push({
        //         name: "FeaturedDestination",
        //     });
        // },

        favoriteDestination(destinationName) {
            // fD: favorite destination name you can seen on rooter/index.js
            this.$router.push({
                name: "FavoriteDestination",
                params: { fD: destinationName },
            });
        },
    },
};
</script>

<style src="./FavoriteDestination.scss" lang="scss" scoped></style>
