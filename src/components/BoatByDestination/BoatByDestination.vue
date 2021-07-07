<template>
    <div class="boat__by__destination">
        <div class="mt-5">
            <h2>
                Bateau disponible à
                <span class="boat__by__destinationName my-3">{{
                    getFavoriteDestination
                }}</span>
            </h2>
        </div>

        <div
            v-for="(boatByDestination, index) in getBoatByDestination"
            :key="index"
            class="card__wrap my-2"
        >
            <div class="card__left">
                <img
                    class="card-img-top card__img"
                    :src="boatByDestination.imgUrl"
                    alt="Card image cap"
                />
            </div>
            <div class="card__right">
                <div class="card__body">
                    <h3 class="destination__name">
                        {{ boatByDestination.name }}
                    </h3>
                    <p>{{ boatByDestination.description.substr(0, 150) }}...</p>
                    <button
                        @click="bookingBoat(boatByDestination.type)"
                        class="card__btn"
                        type="button"
                    >
                        Louer un
                        <span>{{ boatByDestination.type }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BoatByDestination",
    component: {},
    data() {
        return {
            boatsFind: [],
            boatFind: [],
            // fD:favorite destination you can seen on rooter/index.js
            getFavoriteDestination: this.$route.params.fD,
        };
    },
    computed: {
        getBoatByDestination() {
            return this.$store.state.boats;
        },
    },
    methods: {
        bookingBoat(boatType) {
            // bT: boat Type you can seen on rooter/index.js
            this.$router.push({
                name: "BookingBoat",
                params: { bT: boatType },
            });
        },
    },
};
</script>

<style src="./BoatByDestination.scss" lang="scss" scoped></style>
