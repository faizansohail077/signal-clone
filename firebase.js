import * as firebase from 'firebase'
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDczQcQVS0t-oNhTy3-NhytqtKKsTTXyss",
    authDomain: "signal-clone-3c7d0.firebaseapp.com",
    projectId: "signal-clone-3c7d0",
    storageBucket: "signal-clone-3c7d0.appspot.com",
    messagingSenderId: "912309436925",
    appId: "1:912309436925:web:38f90ac6aeafdbaddd5994",
    measurementId: "G-3GSTPMMV61"
};


let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
}
else {
    app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }