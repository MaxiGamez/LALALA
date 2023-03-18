import { useState } from "react";
import Button from "./Button";

const ItemCount = ({ initial, stock, onAddToCart }) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <div className="itemcount-container">
            <div className="item-count-accion">
            <Button onTouchButton={decrease} color="red">
                -
            </Button>
            <span className="contador"> {count} </span>
            <Button onTouchButton={increase} color="green">
                +
            </Button>
            </div>

    
            <div className="item-count-boton">
                <Button color="lightblue"className="boton"
                    onTouchButton={() => onAddToCart(count)}
                >
                    Agregar al carrito
                </Button>
            </div>
        </div>

    );
};
export default ItemCount;