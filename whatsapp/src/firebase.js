import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA31AE40kilLRzdpIh2BSdnaNic_JSgMx4",
  authDomain: "whatsapp-cb957.firebaseapp.com",
  projectId: "whatsapp-cb957",
  storageBucket: "whatsapp-cb957.appspot.com",
  messagingSenderId: "394036238747",
  appId: "1:394036238747:web:a96d70722492a61ad3693e",
  measurementId: "G-M2L4DMC3X3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
