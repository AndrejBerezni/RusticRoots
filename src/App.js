import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Account from "./Components/Account/Account";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductSection from "./Components/Shop/ProductSection/ProductSection";
import products from "./Data/Products";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const honey = products.filter(product => product.type === 'honey');
  const cider = products.filter(product => product.type === 'cider');

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/shop' element={<Shop />} >
          <Route index element={<ProductSection products={honey} />} />
          <Route path='honey' element={<ProductSection products={honey} />} />
          <Route path='cider' element={<ProductSection products={cider} />} />
        </Route>
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
