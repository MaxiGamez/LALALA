
import React from "react";
import NavBar from "./componentes/NavBar";
import ItemListContainer from "./componentes/ItemListContainer";
import './App.css';
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
      return (
            <div className="container">
                  <BrowserRouter>

                        <NavBar />

                        <Routes>
                              <Route path="/" element={<ItemListContainer greeting={"Productos Intipan"} />} />

                              <Route path="/productos/:idUser" element={<ItemDetailContainer />} />

                              <Route
                                    path="/category/:category"
                                    element={<ItemListContainer greeting={"Para su mesa y para cocinar"} />}
                              />
                        </Routes>
                  </BrowserRouter>
            </div>
      );
}

export default App;

