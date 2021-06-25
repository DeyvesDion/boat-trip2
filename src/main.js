import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebase from "firebase/app";
import axios from 'axios'
import VueAxios from 'vue-axios'

// app.use(VueAxios, axios)

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj-yM_GadLyHTKG2EFbK8Fqd0HOsErAMo",
    authDomain: "boat-trip-cea7e.firebaseapp.com",
    projectId: "boat-trip-cea7e",
    storageBucket: "boat-trip-cea7e.appspot.com",
    messagingSenderId: "465183952717",
    appId: "1:465183952717:web:975baa4dc3797068e57104"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
