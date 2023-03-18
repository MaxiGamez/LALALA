import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import productos from "../asyncMock";
import { useParams } from "react-router-dom";
import Loader from "./Loader";


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

  const [isLoading, setIsloading] = useState(true);

  const params = useParams();

  const { category } = useParams();

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

  useEffect(() => {
    leerDatos();
  }, []);

  return (
    <div className="container">
      <h1>{greeting}</h1>

      {
        isLoading ?
          <Loader/>
          :
          <ItemList users={users} category={category} />
      }
    </div>
  );
}

export default ItemListContainer;


