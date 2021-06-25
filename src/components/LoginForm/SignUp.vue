<template>
    <div class="container" id="logreg-forms">
        <form @submit.prevent="authenticate" class="form-signin">
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
                    autofocus
                    v-model="name"
                    required
                />

                <input
                    type="text"
                    id="inputName"
                    class="form-control mb-2"
                    placeholder="Prénom"
                    v-model="lastName"
                    required
                />
            </div>

            <input
                type="email"
                id="inputEmail"
                class="form-control mb-2"
                placeholder="Adresse mail "
                v-model="email"
                required
            />
            <input
                type="password"
                id="inputPassword"
                class="form-control mb-2"
                placeholder="Mot de passe"
                v-model="password"
                required
            />
            <!-- <div v-if="mode == 'create'">
                <input
                    v-if="swichCreateAccount"
                    type="password"
                    id="confirmPassword"
                    class="form-control mb-2"
                    placeholder="Confirmer mot de passe"
                    v-model="confirmPassword"
                    required
                />
            </div> -->

            <button class="btn btn__signUpForm" type="submit">
                {{ mode == "login" ? "Se connecter" : "Créer un compte" }}
            </button>
            <div v-if="error" class="error">{{ error.message }}</div>
        </form>
        <p>{{ name }}</p>
        <p>{{ lastName }}</p>
        <p>{{ email }}</p>
        <p>{{ password }}</p>
        <!-- <p>{{ confirmPassword }}</p> -->
    </div>
</template>

<script>
import firebase from "firebase";
require("firebase/auth");
export default {
    name: "SignUp",
    data() {
        return {
            user: {
                name: "",
                lastName: "",
                email: "",
                password: "",
                // confirmPassword: "",
            },
            mode: "login",
            swichCreateAccount: true,
            error: "Ce champ et requis",
        };
    },
    methods: {
        switchToCreateAccount() {
            this.mode = "create";
            // confirmPassWord = true;
        },
        switchToLogin() {
            this.mode = "login";
        },
        authenticate() {
            if (this.mode == "login") {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(
                        this.user.email,
                        this.user.password
                    )
                    .then(() => {
                        this.$router.push({
                            name: "Dashboard",
                            // params: { dB: dashboard },
                        });
                        console.log(this.user);
                    })

                    .catch((error) => {
                        console.log(error.message);
                    });
                this.user.email = "";
                this.user.password = "";
            } else {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                        this.user.email,
                        this.user.password
                    )
                    .then((res) => {
                        res.user
                            .updateProfile({
                                displayName: this.user.name,
                            })

                            .then(() => {
                                this.$router.push({
                                    name: "Dashboard",
                                    // params: { dB: dashboard },
                                });
                            });
                        console.log(this.user);
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
                this.user.email = "";
                this.user.password = "";
            }

            // try {
            //     const user = firebase
            //         .auth()
            //         .createUserWithEmailAndPassword(
            //             this.user.name,
            //             this.user.lastName,
            //             this.user.email,
            //             this.user.password
            //         );
            //     console.log(user);
            //     this.$router.push({
            //         name: "Dashboard",
            //         // params: { fD: destinationName },
            //     });
            // } catch (err) {
            //     console.log(err);
            //     this.user.name = "";
            //     this.user.lastName = "";
            //     this.user.email = "";
            //     this.user.password = "";
            //     // this.confirmPassword = "";
            // }
        },

        // this.name = "";
        // this.lastName = "";
        // this.email = "";
        // this.password = "";
        // this.confirmPassword = "";
    },
};
// computed: {
//     users() {
//         return this.$store.getters.currentUser;
//     },
// },
</script>

<style src="./SignUp.scss" lang="scss" scoped></style>
