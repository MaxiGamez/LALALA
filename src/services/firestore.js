import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, writeBatch, doc } from "firebase/firestore";
import productos from "../asyncMock"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "proyecto-en-reactjs",
    storageBucket: "proyecto-en-reactjs.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_ID,
    appId: "1:849839207809:web:05f3b4ac5aa68847bb2480",
    measurementId: "G-LSNEVN8JHS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function createOrder(orderData) {
    const collectionRef = collection(db, "orders");

    const response = await addDoc(collectionRef, orderData);
    console.log("Orden creada correctamente", response.id);

    return response.id;
}

export async function exportData() {
    const collectionRef = collection(db, "asyncMock");

    for (let item of productos) {
        const { id } = await addDoc(collectionRef, item);
        
        console.log("Documento creado", id);
    }
}

export async function exportDataWithBatch() {
    const batch = writeBatch(db);
    const collectionRef = collection(db, "asyncMock");

    for (let item of productos) {
        const newDoc = doc(collectionRef);
        batch.set(newDoc, item);
    }


}



