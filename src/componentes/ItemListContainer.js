import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
// --------------------------------------------------------
import { collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

//------------------------------------------------------------------------------
async function singleItemData() {

  const productosCollecionRef = collection(db, "productos");
  let snapshotProductos = await getDocs(productosCollecionRef);
  const documentos = snapshotProductos.docs;

  const dataProductos = documentos.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProductos;
}
//--------------------------------------------------------------------------------

async function itemsByCategoriaDatabase(categoryURL) {
  const productosCollecionRef = collection(db, "productos");

  const q = query(productosCollecionRef, where("category", "==", categoryURL));

  let snapshotProductos = await getDocs(q);
  const documentos = snapshotProductos.docs;
  const dataProductos = documentos.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProductos;
}

// -------------------------------------------------------------------------------
function ItemListContainer({ greeting }) {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const params = useParams();
  const idCategory = params.idCategory;

  async function leerDatos() {
    if (idCategory === undefined) {
      let respuesta = await singleItemData();
      setUsers(respuesta);
      setIsloading(false);

    } else {
      let respuesta = await itemsByCategoriaDatabase(idCategory);
      setUsers(respuesta);
      setIsloading(false);
    }
  }

  useEffect(() => {leerDatos();},[idCategory]);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      {
        isLoading ?
          <Loader />
          :
          <ItemList users={users} category={idCategory} />
      }
    </div>
  );
}

export default ItemListContainer;


