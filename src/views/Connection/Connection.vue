<template>
    <div class="connection">
        <div class="row connection__header container-fluid mt-5">
            <div class="info__card col-md-6">
                <h1>
                    info sur boat trip
                </h1>
            </div>
            <div class="connection__form col-md-6">
                <SignUp />
            </div>
        </div>
    </div>
</template>

<script>
import SignUp from "@/components/LoginForm/SignUp.vue";
export default {
    name: "Connetion",
    components: {
        SignUp,
    },
};
</script>

<style src="./Connection.scss" lang="scss" scoped></style>
