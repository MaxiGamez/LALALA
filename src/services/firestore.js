import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcYk26hqx6nD1ArnEZb4On8cmG_H37DKg",
  authDomain: "proyecto-en-reactjs.firebaseapp.com",
  projectId: "proyecto-en-reactjs",
  storageBucket: "proyecto-en-reactjs.appspot.com",
  messagingSenderId: "849839207809",
  appId: "1:849839207809:web:05f3b4ac5aa68847bb2480",
  measurementId: "G-LSNEVN8JHS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function createOrder(orderData){
const collectionRef = collection("orders");

const response = addDoc(collectionRef,orderData);

}