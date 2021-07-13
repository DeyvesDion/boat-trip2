<template>
    <div class="banner">
        <div class="inner__banner row container">
            <h1 class="banner__title col-md-7">
                Location de bateau entre particulier
            </h1>
            <SearchForm class="col-md-5" />
        </div>
    </div>
</template>

<script>
import SearchForm from "@/components/SearchForm/SearchForm.vue";
export default {
    name: "Banner",
    components: {
        SearchForm,
    },
};
</script>

<style src="./Banner.scss" lang="scss" scoped></style>
