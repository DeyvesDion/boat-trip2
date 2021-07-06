<template>
    <div class="boat__by__destination">
        <div class="mt-5">
            <h1>
                <!-- Bateau disponible à {{ getBoatByDestinations }} -->
                <!-- <span class="destination__name">{{
                    getBoatByDestination.name
                }}</span> -->
                {{ $store.state.boats }}
            </h1>
            <button type="" @click="essai">dgggggggg</button>
        </div>

        <!-- <div
            v-for="(getBoatByDestination, index) in getBoatByDestinations"
            :key="index"
            class="card__wrap"
        >
            <div class="card__left">
                <img
                    class="card-img-top card__img"
                    :src="getBoatByDestination.imgUrl"
                    alt="Card image cap"
                />
            </div>
            <div class="card__right">
                <div class="card__body">
                    <h3 class="destination__name">
                        {{ getBoatByDestination.name }}
                    </h3>
                    <p>
                        {{ getBoatByDestination.description.substr(0, 150) }}...
                    </p>
                    <button class="card__btn" type="button">
                        Louer un
                        <span>{{ getBoatByDestination.name }}</span>
                    </button>
                </div>
            </div>
        </div> -->
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
            // getFavoriteDestination: this.$route.params.fD,
        };
    },
    computed: {
        getBoatByDestinations() {
            // return this.$store.state.boats.find(
            //     (boat) => boat.port === this.$route.params.fD
            // );
            return this.$store.state.boats;
            // this.boatsFind.push(this.$store.state.boats);
        },
    },
    methods: {
        essai() {
            this.boatsFind.push(this.$store.state.boats);
            this.boatsFind.forEach((element) => {
                console.log(this.element.name);
                if (element.port === this.$route.params.fD) {
                    console.log("ok");
                }
            });
        },
    },
};
</script>

<style src="./BoatByDestination.scss" lang="scss" scoped></style>
