// import "../App.css";
// import { useContext } from "react";
// import cartContext  from "../context/cartContext";

// export  const CartDetail = ({ prod }) => {
//   const { addCart, deleteItem } = useContext(CartContextProvider);
//   const { quantity, stock, id } = prod;

//   const addItem = () => {
//     let newItem = quantity + 1;

//     if (quantity >= stock) {
//       addCart(prod, stock);
//     } else {
//       addCart(prod, newItem);
//     }
//   };

//   const subtractItem = () => {
//     let newItem = quantity - 1;
//     addCart(prod, newItem);
//     if (quantity <= 1) {
//       deleteItem(id);
//     } else {
//       addCart(prod, newItem);
//     }
//   };

//   const delItem = () => {
//     deleteItem(id);
//   };

//   return (

//     <tbody>
//       {cart.map((user) => (
//         <tr key={user.id} className="cartList_row">
//           <td>
//             <img height={50} src={user.avatar} alt={user.nombre} />
//           </td>
//           <td>{user.nombre}</td>
//           <td>$ {user.precio}</td>
//           <td>{user.newCantidad}</td>
//           <button onClick={() => deleteItem(user)} color="#c63224">X</button>
//           <th>$ {user.subtotal}</th>
//         </tr>
//       ))}
//     </tbody>
//   );
// };