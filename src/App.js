import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Account from "./Components/Account/Account";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductSection from "./Components/Shop/ProductSection/ProductSection";
import { getProducts } from "./firebase";
import Spinner from "react-bootstrap/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { showSpinner, hideSpinner } from "./ReduxActions/showSpinnerActions";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [honeyProducts, setHoneyProducts] = useState([]);
  const [ciderProducts, setCiderProducts] = useState([]);
  const spinner = useSelector((state) => state.showSpinner);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(showSpinner());
      const honey = await getProducts("Honey");
      const cider = await getProducts("Cider");
      setHoneyProducts(honey);
      setCiderProducts(cider);
      dispatch(hideSpinner());
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          <Route index element={<ProductSection products={honeyProducts} />} />
          <Route
            path="honey"
            element={<ProductSection products={honeyProducts} />}
          />
          <Route
            path="cider"
            element={<ProductSection products={ciderProducts} />}
          />
        </Route>
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {spinner && (
        <Spinner
          variant="warning"
          animation="border"
          role="status"
          className="spinner"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

export default App;
