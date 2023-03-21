import { createContext, useState } from "react";


const cartContext = createContext({ cart: [] });

const Provider = cartContext.Provider;
// -------------------------------------------

export function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addItem(item, count) {
        const newCart = JSON.parse(JSON.stringify(cart));

        if (isInCart(item.id)) {

            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id);
            newCart[index].count = newCart[index].count + count;
        } else {
            newCart.push({ ...item, count });
        }
        setCart(newCart);
    }

    // Funcion dentro del carrito
    function isInCart(id) {
        return cart.some((item) => item.id === id);
    }

    // Funciones de eliminar item del carrito
    function deleteItem(id) {
        setCart(cart.filter((product) => product.id !== id));
    };

    // Funcion del total del carrito
    function getCountInCart() {
        let total = 0;
        for (let i = 0; i < cart.length; i++)
            cart.forEach((item) => total + item.count);
        return total;
    }

    // Funcion remover item del carrito
    function removeItemCart() {
        const newCart = JSON.parse(JSON.stringify(cart));
        newCart.pop();
        setCart(newCart);
    }

    // Funcion vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    return (
        <>
            <Provider value={{
                cart,
                isInCart,
                deleteItem,
                addItem,
                removeItemCart,
                clearCart,
                getCountInCart,
            }}>
                {children}
            </Provider>
        </>
    );

}

export default cartContext;