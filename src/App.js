
import React from "react";
import NavBar from "./componentes/NavBar";
import './App.css';
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./componentes/CartContainer";
// import { exportDataWithBatch } from "./services/firestore";

function App() {
      return (
            <div className="container">
                  <CartContextProvider>
                        <BrowserRouter>

                              <NavBar />

                              <Routes>
                                    <Route path="/" element={<ItemListContainer greeting={"Productos Intipan"} />} />

                                    <Route path="/productos/:idUser" element={<ItemDetailContainer />} />

                                    <Route
                                          path="/category/:category"
                                          element={<ItemListContainer greeting={"Para su mesa y para cocinar"} />} />

                                    <Route path="/cart" element={<CartContainer />}/>

                                    <Route path="/checkout/:id"
                                          element={<h3>Gracias por tu compra</h3>}/>
                              </Routes>

                        </BrowserRouter>
                  </CartContextProvider>
            </div>
      );
}

export default App;

