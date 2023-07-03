import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-nV6tFOVa_8fNn3INxgAZBbqmkF3FT8U",
  authDomain: "my-react-native-project-2def5.firebaseapp.com",
  databaseURL:
    "https://my-react-native-project-2def5-default-rtdb.firebaseio.com",
  projectId: "my-react-native-project-2def5",
  storageBucket: "my-react-native-project-2def5.appspot.com",
  messagingSenderId: "571650823687",
  appId: "1:571650823687:web:ec540d1215c35f8877fca2",
  measurementId: "G-QBH6HZKTJQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
