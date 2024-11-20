import { put, takeEvery } from "redux-saga/effects";
import { AuthError, AuthErrorCodes, signInWithPopup, UserCredential } from "firebase/auth";

import { UserActions } from "../slices/user";
import FirebaseAuth, { facebookProvider, googleProvider } from "@/firebase/auth";

function* loginWithFacebook() {
    try {
        yield FirebaseAuth.signOut()

        const userCredential: UserCredential = yield signInWithPopup(FirebaseAuth, facebookProvider);

        const user = JSON.parse(JSON.stringify(userCredential.user));

        console.log('user ', user);

        // query(collection(firestore, 'users'), where())

        yield put(UserActions.loginSuccess(user));
    } catch (error) {
        console.log('error ', error);

        if ((error as AuthError).code === AuthErrorCodes.NEED_CONFIRMATION) {
            // TODO: Link current method account with existing account in database
        }

    }
}

function* loginWithGoogle() {
    try {
        yield FirebaseAuth.signOut()

        const userCredential: UserCredential = yield signInWithPopup(FirebaseAuth, googleProvider);

        const user = JSON.parse(JSON.stringify(userCredential.user));

        yield put(UserActions.loginSuccess(user));
    } catch (error) {
        console.log('error ', error);

    }
}

function* loginWithZalo() {
    try {

    } catch (error) {
        console.log('error ', error);

    }
}

export function* userSaga() {
    yield takeEvery(UserActions.loginWithFacebook.type, loginWithFacebook)
    yield takeEvery(UserActions.loginWithGoogle.type, loginWithGoogle)
    yield takeEvery(UserActions.loginWithZalo.type, loginWithZalo)
}