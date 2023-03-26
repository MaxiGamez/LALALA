import "../App.css";
import { useContext } from "react";
import cartContext from "../context/cartContext";

export const CartDetail = ({ prod }) => {
    const { deleteItem } = useContext(cartContext);
    const { nombre, precio, subtotal, avatar, quantity, id } = prod;


    const delItem = () => {
        deleteItem(id);
    };

    return (
        <>
            <td>
                <img height={50} src={avatar} alt={nombre} />
            </td>
            <td>{nombre}</td>
            <td>$ {precio}</td>
            <td>{quantity}</td>
            <th>$ {subtotal}</th>
            <th>
                <img height={50} className="garbage" onClick={delItem} src="../../img/trash.png" alt="garbage" />
            </th>
        </>
    );
}