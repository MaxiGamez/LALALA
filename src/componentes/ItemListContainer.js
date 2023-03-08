import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import productos from "../asyncMock";
import { useParams } from "react-router-dom";


function singleItemData() {
  return new Promise((resolve, reject) => {
    let error = false;
    
    setTimeout(() => {
      if (error === true) reject("Error leyendo los datos");
      resolve(productos);
    }, 1000);
  });
}

function itemsByCategoriaDatabase(categoryURL) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productosFiltered = productos.filter(
        (item) => item.category === categoryURL
        );
        resolve(productosFiltered);
      }, 1000);
    });
  }
  function ItemListContainer({ greeting }) {

    const [users, setUsers] = useState([]);

    const params = useParams();
    const {category} = useParams();
    const idCategory = params.idCategory;
    
    async function leerDatos() {
      if (idCategory === undefined) {
      let respuesta = await singleItemData();
      setUsers(respuesta);
    } else {
      let respuesta = await itemsByCategoriaDatabase(idCategory);
      setUsers(respuesta);
    }
  }

  useEffect(() => {
    leerDatos();
  }, []);

  return (
    <>
      <h1>{greeting}</h1>

      <ItemList users={users} category={category} />
    </>
  );
}

export default ItemListContainer;


