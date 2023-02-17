import React from "react";

export default function ItemListContainer({greeting}) {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
    </div>
  );
}
