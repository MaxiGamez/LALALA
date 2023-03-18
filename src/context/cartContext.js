import { createContext, useState } from "react";



const cartContext = createContext({ cart: [] });

const Provider = cartContext.Provider;

function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

// Funcion agregar item al carrito
    function addItem(item, count) {

        const newCart = JSON.parse(JSON.stringify(cart));

        if (isInCart(item.id)) {

      let index= cart.findIndex(itemInCart=> itemInCart.id===item.id);

      newCart[index].count =newCart[index].count + count;
    }
    else {
       newCart.push({ ...item, count });
    }

    setCart(newCart);
    }

    // Funciones del contador del carrito
    function getCountInCart() {
        let total = 0;
        cart.forEach((item) => total + item.count);
        return total;
    }

    // Funcion dentro del carrito
    function isInCart(id) {
    
    }
    
    // Funcion remover item del carrito
    function removeItemCart() {
        const newCart = JSON.parse(JSON.stringify(cart));
        newCart.pop();
        setCart(newCart);
    }

    // Funcion vaciar carrito
    const clearCart=(id) => setCart([]);
     
    
    return (
        <Provider value={{ cart, addItem, removeItemCart, clearCart, getCountInCart}}>
            {children}
        </Provider>
    );



}

export { CartContextProvider };
export default cartContext;