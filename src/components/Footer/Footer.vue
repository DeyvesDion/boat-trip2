<template>
    <div>
        <footer class="theme-bg-primary" id="footer">
            <div class="container py-5 mb-3 col-md-offset-2">
                <div class="row" style="margin-left:50px;">
                    <div class="footer-col col-lg-3">
                        <h4>Informations</h4>
                        <ul>
                            <li><a href="#">A propos</a></li>
                            <li><a href="#">Comment ça marche</a></li>
                            <li><a href="#">Louer mon bateau</a></li>
                            <li><a href="#">Assurance</a></li>
                            <li><a href="#">Service de conciergerie</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div class="footer-col col-lg-3">
                        <h4>Quoi louer</h4>
                        <ul>
                            <li><a href="#">Location Bateau à moteur</a></li>
                            <li><a href="#">Location Semi-rigide</a></li>
                            <li><a href="#">Location Yacht</a></li>
                            <li><a href="#">Location Voilier</a></li>
                            <li><a href="#">Location Jet ski</a></li>
                            <li><a href="#">Location Péniche</a></li>
                        </ul>
                    </div>
                    <div class="footer-col col-lg-3">
                        <h4>Où louer mon bateau</h4>
                        <ul>
                            <li><a href="#">Marseille</a></li>
                            <li><a href="#">Arcachon</a></li>
                            <li><a href="#">Paris</a></li>
                            <li><a href="#">Hyères</a></li>
                            <li><a href="#">La Rochelle</a></li>
                            <li><a href="#">Corse</a></li>
                        </ul>
                    </div>
                    <div class="footer-col col-lg-3">
                        <h4>Réseaux sociaux</h4>
                        <ul class="social-list">
                            <li class="list-inline-item">
                                <a href="#"><i class="fab fa-facebook"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#"
                                    ><i class="fab fa-twitter-square"></i
                                ></a>
                            </li>
                        </ul>
                        <div class="mb-2">
                            Boat Trip <br />
                            75016 Paris <br />
                            01 00 00 00 00
                        </div>
                        <div><a href="">contact@boattrip.fr</a></div>
                    </div>
                </div>
            </div>
            <div class="container">
                <hr />
            </div>
            <div class="download-area">
                <div class="container text-center">
                    <h3 class="mb-3">Télécharger notre App</h3>
                    <div class="section-info mb-4 mx-auto">
                        Télecharger notre App sur App Store et Google Play
                    </div>
                    <ul class="d-inline-block">
                        <li class="list-inline-item mr-3">
                            <a href=""
                                ><img
                                    class="appDownload"
                                    src="../../assets/app-download.png"
                                    alt="android"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <small class="">
                <ul class="copyright text-center">
                    <a href="https://deyvesdion.fr"
                        >&#9400; De Yves DION - Développé avec VueJs par 💖</a
                    >
                </ul>
            </small>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style src="./Footer.scss" lang="scss" scoped></style>
