import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAXnCc61cbfVCEukOec1ZY85aRFmViTT5E",
    authDomain: "slack-clone-cc040.firebaseapp.com",
    projectId: "slack-clone-cc040",
    storageBucket: "slack-clone-cc040.appspot.com",
    messagingSenderId: "386159627685",
    appId: "1:386159627685:web:965e1b2b8e131110962c4c",
    measurementId: "G-BF5YNS38VV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
