import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../Firebase.config";

export const initializeFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};

export const signInWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            // Signed in
            const newInfo = res.user;
            newInfo.error = "";
            newInfo.success = true;
            newInfo.isSingdIn = true;
            return newInfo;
            // ...
        })
        .catch((error) => {
            var errorMessage = error.message;
            const newInfo = {};
            newInfo.error = errorMessage;
            newInfo.success = false;
            return newInfo;
        });
};

export const signInWithFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            // Signed in
            const newInfo = res.user;
            newInfo.error = "";
            newInfo.success = true;
            newInfo.isSingdIn = true;
            return newInfo;
            // ...
        })
        .catch((error) => {
            var errorMessage = error.message;
            const newInfo = {};
            newInfo.error = errorMessage;
            newInfo.success = false;
            return newInfo;
        });
};

export const signOut = () => {
    return firebase
        .auth()
        .signOut()
        .then((res) => {
            // Sign-out successful.
            const user = res;
            return user;
        })
        .catch((error) => {
            // An error happened.
        });
};

export const currentLoggedInUserLoad = () => {
    return firebase.auth().onAuthStateChanged();
};
