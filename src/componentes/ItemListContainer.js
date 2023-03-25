import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore";


function ItemListContainer() {

  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db,"asyncMock");

    getDocs(itemsCollection).then((snapshotList) => {
      const docs = snapshotList.docs.map((snapshot) => ({
        id: snapshot.id,
        ...snapshot.data(),
      }));
      setItems(docs);
    });
  }, []);

  return (
    <div className="container">

      <ItemList users={items} category={category} />

    </div>
  );
}

export default ItemListContainer;


