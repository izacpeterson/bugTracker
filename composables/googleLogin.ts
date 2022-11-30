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
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        resolve(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        reject(error);
      });
  });
}
