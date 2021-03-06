import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDkgRPlRbvWX_oR9bkHdMQxdZt6ThTjy5w",
  authDomain: "myfilms-be1c3.firebaseapp.com",
  projectId: "myfilms-be1c3",
  storageBucket: "myfilms-be1c3.appspot.com",
  messagingSenderId: "634252699940",
  appId: "1:634252699940:web:a2b04232339e6c5c662bb1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref();

export { auth, provider, storage };
export default db;
