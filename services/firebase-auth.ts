import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const provider = new GoogleAuthProvider();

import { app } from "./firebase-config";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email: string, password: string) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  console.log(user.user.getIdToken);
  return user;
};

export const signIn = async (email: string, password: string) => {
  const user = await signInWithEmailAndPassword(auth, email, password);

  return user;
};

export const signOutUser = async () => {
  const res = await signOut(auth)
    .then(() => {
      console.log("Signed Out");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const googleSignin = async () => {
  const res = await signInWithPopup(auth, provider);
  console.log(res);
  return res;
};
