import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCZuqTS6o8ooWunKCEkv68UUqjjRN8RB7k",
  authDomain: "rip-curl-store.firebaseapp.com",
  projectId: "rip-curl-store",
  storageBucket: "rip-curl-store.appspot.com",
  messagingSenderId: "598397817595",
  appId: "1:598397817595:web:3d44cef8993ec30409165e"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);

