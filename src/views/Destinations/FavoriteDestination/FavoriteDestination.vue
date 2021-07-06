<template>
    <div>
        <div class="container favorite__destination">
            <div class="card__wrap">
                <div class="card__left">
                    <img
                        class="card-img-top card__img"
                        :src="getFavoriteDestinationById.imgUrl"
                        alt="Card image cap"
                    />
                </div>
                <div class="card__right">
                    <div class="card__body">
                        <h3 class="destination__name">
                            {{ getFavoriteDestinationById.name }}
                        </h3>
                        <p>
                            {{
                                getFavoriteDestinationById.description.substr(
                                    0,
                                    150
                                )
                            }}...
                        </p>
                        <button class="card__btn" type="button">
                            Visiter
                            <span>{{ getFavoriteDestinationById.name }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <BoatByDestination />
    </div>
</template>

<script>
import BoatByDestination from "@/components/BoatByDestination/BoatByDestination.vue";
export default {
    name: "FavoriteDestination",
    components: {
        BoatByDestination,
    },
    data() {
        return {
            // fD:favorite destination you can seen on rooter/index.js
            getFavoriteDestination: this.$route.params.fD,
        };
    },

    computed: {
        getFavoriteDestinationById() {
            return this.$store.state.destinations.find(
                (destination) => destination.name === this.$route.params.fD
            );
        },
    },
};
</script>

<style src="./FavoriteDestination.scss" lang="scss" scoped></style>
