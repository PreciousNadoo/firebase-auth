import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBoBq0hWuzxcJ_ltIEGH2M70YWvDaWddOw",
    authDomain: "precious-b4e48.firebaseapp.com",
    projectId: "precious-b4e48",
    storageBucket: "precious-b4e48.appspot.com",
    messagingSenderId: "45986322309",
    appId: "1:45986322309:web:804593f200702873bc16ec",
    measurementId: "G-C1BR9GD4ED"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("reg-btn").addEventListener('click', function () {
    document.getElementById("register-div").style.display = "inline";
    document.getElementById("login-div").style.display = "none";
});


document.getElementById("log-btn").addEventListener('click', function () {
    document.getElementById("register-div").style.display = "none";
    document.getElementById("login-div").style.display = "inline";
});