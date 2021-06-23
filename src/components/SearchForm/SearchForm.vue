<template>
    <div class="searchForm">
        <form class="row g-3">
            <div class="col-md-6">
                <label for="startOdDeparture" class="form-label1"
                    >Date de début</label
                >
                <input
                    v-model.trim="searchForm.startOdDeparture"
                    type="date"
                    class="form-control"
                    id="startOdDeparture"
                />
            </div>
            <div class="col-md-6">
                <label for="endOdDeparture" class="form-label2"
                    >Date de fin</label
                >
                <input
                    v-model.trim="searchForm.endOdDeparture"
                    type="date"
                    class="form-control"
                    id="endOdDeparture"
                />
            </div>
            <div class="col-12">
                <label for="placeOdDeparture" class="form-label3"
                    >Lieu de départ</label
                >
                <input
                    v-model.trim="searchForm.placeOdDeparture"
                    type="text"
                    class="form-control"
                    id="placeOdDeparture"
                    placeholder="Paris, Marseille, Croatie"
                    required
                />
            </div>
            <div class="col-md-12">
                <label for="boartType" class="form-label3"
                    >Type de bateau</label
                >
                <select id="boartType" class="form-select">
                    <option
                        v-for="(boatType, index) in boatsType"
                        :key="index"
                        >{{ boatType.value }}</option
                    >
                </select>
            </div>
            <div class="">
                <button
                    @click.prevent="
                        submitSearchForm(searchForm.placeOdDeparture)
                    "
                    type="submit"
                    class="btn btn__searchForm"
                >
                    Rechercher
                </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "SearchForm",
    components: {},
    data() {
        return {
            searchForm: {
                startOdDeparture: null,
                endOdDeparture: null,
                placeOdDeparture: null,
                boartType: null,
            },
        };
    },
    computed: {
        boatsType() {
            return this.$store.state.boatsType;
        },
    },
    methods: {
        submitSearchForm() {},
    },
};
</script>

<style src="./SearchForm.scss" lang="scss" scoped></style>
