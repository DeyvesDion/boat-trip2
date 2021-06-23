<template>
    <div class="container" id="logreg-forms">
        <form class="form-signin" @submit.prevent="SingUp">
            <h1 class="form__title" v-if="mode == 'login'">Connexion</h1>
            <h1 class="form__title" v-else>Inscription</h1>
            <p class="card__subtitle" v-if="mode == 'login'">
                Tu n'as pas encore de compte ?
                <span class="card__action" @click="switchToCreateAccount()"
                    >Créer un compte</span
                >
            </p>
            <p class="card__subtitle" v-else>
                Tu as déjà un compte ?
                <span class="card__action" @click="switchToLogin()"
                    >Se connecter</span
                >
            </p>
            <div v-if="mode == 'create'">
                <input
                    v-if="swichCreateAccount"
                    type="text"
                    id="inputName"
                    class="form-control mb-2"
                    placeholder="Nom"
                    required
                    autofocus
                    v-model="name"
                />
                <input
                    type="text"
                    id="inputName"
                    class="form-control mb-2"
                    placeholder="Prénom"
                    required
                    v-model="lastName"
                />
            </div>

            <input
                type="email"
                id="inputEmail"
                class="form-control mb-2"
                placeholder="Adresse mail "
                required
                v-model="email"
            />
            <input
                type="password"
                id="inputPassword"
                class="form-control mb-2"
                placeholder="Mot de passe"
                required
                v-model="password"
            />

            <button class="btn btn__signUpForm" type="submit">
                <i class="fas fa-sign-in-alt"></i> Se connecter
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            lastName: "",
            email: "",
            password: "",
            mode: "login",
            swichCreateAccount: true,
            lastNameField: true,
        };
    },
    methods: {
        SingUp() {
            this.email = "";
            this.password = "";
        },
        switchToCreateAccount: function() {
            this.mode = "create";
        },
        switchToLogin: function() {
            this.mode = "login";
        },
    },
};
</script>

<style src="./SignUp.scss" lang="scss" scoped></style>
