<template>
    <div class="container">
        <h1 class="booking__boat__title">
            Louer un {{ getBoatType }} à {{ getFavoriteDestination }}
        </h1>
        <div class="">
            <img
                class="booking_boat_img my-5"
                :src="getBoatByBooking.imgUrl"
                alt="Card image cap"
            />
        </div>
        <h2 class="boat__name mb-4">
            Nom du bateau : <span>{{ getBoatByBooking.name }}</span>
        </h2>
        <hr class="separator" />
        <h2 class="boat__prise my-4">
            Prix de la location :
            <span>{{ getBoatByBooking.prix }}€/jour</span>
        </h2>
        <hr class="separator" />
        <h2 class="boat__type my-4">
            Type de bateau :
            <span>{{ getBoatByBooking.type }}</span>
        </h2>
        <hr class="separator" />
        <h2 class="boat__port my-4">
            Port d'attache :
            <span>{{ getFavoriteDestination }}</span>
        </h2>
        <hr class="separator" />
        <h2 class="boat__description my-4">
            A propos :
            <span>{{ getBoatByBooking.description }}</span>
        </h2>
    </div>
</template>

<script>
export default {
    name: "BookingBoat",
    components: {},
    data() {
        return {
            // bT: boat Type you can seen on rooter/index.js
            getBoatType: this.$route.params.bT,
            getFavoriteDestination: this.$route.params.fD,
        };
    },
    computed: {
        getBoatByBooking() {
            return this.$store.state.boats.find(
                (boat) => boat.type === this.$route.params.bT
            );
        },
    },
};
</script>

<style src="./BookingBoat.scss" lang="scss" scoped></style>
