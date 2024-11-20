import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";

import firebaseApp from ".";

const FirebaseAuth = getAuth(firebaseApp);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export default FirebaseAuth;
