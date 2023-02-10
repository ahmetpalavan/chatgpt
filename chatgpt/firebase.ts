import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr6n1lz6H32f3JrwtJ2fWSrB9QVjrq2ug",
  authDomain: "chatgpt-92060.firebaseapp.com",
  projectId: "chatgpt-92060",
  storageBucket: "chatgpt-92060.appspot.com",
  messagingSenderId: "574291549904",
  appId: "1:574291549904:web:f09cb771a8399590f8c8d5",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
