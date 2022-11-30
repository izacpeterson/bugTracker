import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDJ99OyKVf439DSekIqo5MCvvUzfTs2CeQ",
  authDomain: "bugtracker-d927d.firebaseapp.com",
  projectId: "bugtracker-d927d",
  storageBucket: "bugtracker-d927d.appspot.com",
  messagingSenderId: "564128035217",
  appId: "1:564128035217:web:995f1585e455fe5da9aa30",
};
const app = initializeApp(firebaseConfig);

export default function () {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        resolve(uid);
        // ...
      } else {
        // User is signed out
        // ...
        reject(null);
      }
    });
  });
}
