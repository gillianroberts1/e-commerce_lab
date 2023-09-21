import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductContainer from "./containers/ProductContainer";
import Basket from "./components/Basket";



function App() {

  
  






  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductContainer />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Router>
  );
}

export default App;
