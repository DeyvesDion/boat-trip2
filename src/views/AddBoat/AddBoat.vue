<template>
    <div class="container">
        <h3 class="add__boat__title">Ajouter un bateau</h3>
        <div class="add__boat__form">
            <h2 class="add__boat__info my-5">Informations personnelles</h2>
            <hr class="separator mb-5" />
            <form class="">
                <div class="row my-3">
                    <div class="col-md-4">
                        <input
                            type="text"
                            class="form-control mb-3"
                            id="validationDefault01"
                            placeholder="Votre Nom"
                            required
                        />
                    </div>
                    <div class="col-md-4">
                        <input
                            type="text"
                            class="form-control mb-3"
                            id="validationDefault02"
                            placeholder="Votre Prénom"
                            required
                        />
                    </div>
                    <div class="col-md-4">
                        <input
                            type="email"
                            class="form-control"
                            id="validationCustom01"
                            placeholder="Votre adresse Email"
                            required
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <input
                            type="tel"
                            class="form-control mb-3"
                            id="validationDefault01"
                            placeholder="Votre Numéro de téléphone"
                            required
                        />
                    </div>
                    <div class="col-md-4">
                        <input
                            type="password"
                            class="form-control mb-3"
                            id="validationDefault02"
                            placeholder="Votre mot de passe"
                            required
                        />
                    </div>
                    <div class="col-md-4">
                        <input
                            type="password"
                            class="form-control"
                            id="validationCustom01"
                            placeholder="Répétez votre mot de passe"
                            required
                        />
                    </div>
                </div>
                <hr class="separator my-5" />
                <h2 class="add__boat__info my-5">
                    Informations sur votre bateau
                </h2>

                <div class="row my-3">
                    <div class="col-md-4 mb-3">
                        <select class="form-control">
                            <option>Type de bateau</option>
                            <option>Bateau à moteur</option>
                            <option>Catamaran</option>
                            <option>Voilier</option>
                            <option>Semi rigide</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <input
                            type="text"
                            class="form-control mb-3"
                            id="validationDefault02"
                            placeholder="Votre ville"
                            required
                        />
                    </div>
                    <div class="col-md-4">
                        <select class="form-control">
                            <option>Port</option>
                            <option>Paris</option>
                            <option>Marseille</option>
                            <option>Martinique</option>
                            <option>Cannes</option>
                        </select>
                    </div>
                </div>

                <div class="row mb-4">
                    <div class="col-md-4">
                        <input
                            type="text"
                            class="form-control mb-3"
                            id="validationDefault01"
                            placeholder="Constructeur"
                            required
                        />
                    </div>
                    <div class="col-md-4">
                        <input
                            type="text"
                            class="form-control mb-3"
                            id="validationDefault02"
                            placeholder="Modèle de bateau"
                            required
                        />
                    </div>
                    <div class="col-md-2">
                        <input
                            type="number"
                            class="form-control"
                            id="validationCustom01"
                            placeholder="Capacité"
                            required
                        />
                    </div>
                    <div class="col-md-2">
                        <input
                            type="number"
                            class="form-control"
                            id="validationCustom01"
                            placeholder="Longeur en m"
                            required
                        />
                    </div>
                </div>
                <div class="row dropfile py-5 col-12 mb-3">
                    <span>Déposez vos images ici</span>
                    <input
                        type="file"
                        class="add__boat__img"
                        name=""
                        id="input-file"
                    />
                    <i>Taille minimum: 400px x 400px</i>
                    <label for="input-file" class="input__label"
                        >Ou cliquez ici</label
                    >
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <button type="button" class="btn__add__boat mb-4">
                            Envoyer
                        </button>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddBoat",
    components: {},
};
</script>

<style src="./AddBoat.scss" lang="scss" scoped></style>
