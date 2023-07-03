import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";

import { auth } from "../../../firebace/config";
import { authSlice } from "./authReduser";

const { authSignOut, authStateChange, updateUserProfile } = authSlice.actions;

export const authSignUpUser =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Await the createUserWithEmailAndPassword function

      const user = await updateProfile(auth.currentUser, {
        displayName: login,
      });

      const { uid, displayName } = await auth.currentUser;
      await dispatch(
        updateUserProfile({
          userId: uid,
          login: displayName,
        })
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  try {
    await auth.signOut();
    dispatch(authSignOut());
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  }
};

export const authStateChangesUsers = () => async (dispatch, getState) => {
  await auth.onAuthStateChanged(async (user) => {
    if (user) {
      try {
        const userUpdateProfile = {
          userId: user.uid,
          login: user.displayName,
        };
        const currentStateChange = getState().auth.stateChange;

        if (!currentStateChange) {
          dispatch(updateUserProfile(userUpdateProfile));
          dispatch(authStateChange({ stateChange: true }));
        }
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      }
    }
  });
};
