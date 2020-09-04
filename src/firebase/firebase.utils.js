import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC0l9egIQFG0Rc9rAk7_dvQMq26Mcn7oZ8",
  authDomain: "crwn-db-1aedc.firebaseapp.com",
  databaseURL: "https://crwn-db-1aedc.firebaseio.com",
  projectId: "crwn-db-1aedc",
  storageBucket: "crwn-db-1aedc.appspot.com",
  messagingSenderId: "360061630223",
  appId: "1:360061630223:web:2e3b2607e618d96506b07a",
  measurementId: "G-3PSRS1C29Q",
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;