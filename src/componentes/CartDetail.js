import "../App.css";
import { useContext } from "react";
import cartContext from "../context/cartContext";

export const CartDetail = ({ prod }) => {
    const { deleteItem, addItem } = useContext(cartContext);
    const { nombre, precio, subtotal, avatar, quantity, id, stock } = prod;

    const sumItem = () => {
        let newItem = quantity + 1;

        if (quantity >= stock) {
            addItem(prod, stock);
        } else {
            addItem(prod, newItem);
        }
    };

    const subtractItem = () => {
        let newItem = quantity - 1;

        if (quantity <= 1) {
            deleteItem(id);
        } else {
            addItem(prod, newItem);
        }

    };

    const delItem = () => {
        deleteItem(id);
    };

    return (
        <>
            <th><img height={80} src={avatar} alt={nombre} /></th>
            <th>{nombre}</th>
            <th>$ {precio}</th>
            <td className="quantity">
                <th><img onClick={sumItem} className="chg-quantity1 update-cart " src="../../img/ap.png" alt="arrow-up" /></th>

                <th >{quantity}</th>

                <th><img onClick={subtractItem} className="chg-quantity2 update-cart " src="../../img/down.png" alt="arrow-down" /></th>
            </td>
            <th>$ {subtotal}</th>
            <th><img height={40} className="garbage" onClick={delItem} src="../../img/trash.png" alt="garbage" /></th>
        </>
    );
}