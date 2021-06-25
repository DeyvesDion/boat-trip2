<template>
    <div class="connection">
        <div class="row connection__header container-fluid">
            <div class="info__card col-md-6">
                <BoatTripInfo />
            </div>
            <div class="connection__form col-md-6">
                <SignUp />
            </div>
        </div>
    </div>
</template>

<script>
import SignUp from "@/components/LoginForm/SignUp.vue";
import BoatTripInfo from "@/components/BoatTripInfo/BoatTripInfo.vue";
export default {
    name: "Connetion",
    components: {
        SignUp,
        BoatTripInfo,
    },
};
</script>

<style src="./Connection.scss" lang="scss" scoped></style>
