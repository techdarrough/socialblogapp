// import firebase dependencies
import firebase from 'firebase/app'
import 'firebase/auth';
// database
import 'firebase/firestore';
import 'firebase/storage';
// firebase app confg for unlv-social-blog-app
const firebaseConfig = {
    apiKey: "AIzaSyBSapKBTCG3Riok64iTbBk9Rfu8NzOsIsE",
    authDomain: "unlv-social-blog-app.firebaseapp.com",
    projectId: "unlv-social-blog-app",
    storageBucket: "unlv-social-blog-app.appspot.com",
    messagingSenderId: "293093482567",
    appId: "1:293093482567:web:b9e5a6ef25a76c99ff9162",
    measurementId: "G-LPV5RRGJLH"
};
// prevents next from runn instance twice
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
// exports firebase sdks
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();