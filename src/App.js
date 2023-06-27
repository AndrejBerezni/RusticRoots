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
import Alert from "react-bootstrap/Alert";
import { hideAlert } from "./ReduxActions/showAlertActions";
import { useSelector, useDispatch } from "react-redux";
import { showSpinner, hideSpinner } from "./ReduxActions/showSpinnerActions";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [honeyProducts, setHoneyProducts] = useState([]);
  const [ciderProducts, setCiderProducts] = useState([]);
  const spinner = useSelector((state) => state.showSpinner);
  const alert = useSelector((state) => state.showAlert.showAlert);
  const alertMessage = useSelector((state) => state.showAlert.message);

  // Scroll to the top of the page when you change page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Load products:
  useEffect(() => {
    const fetchProducts = async () => {
      // Don't show spinner on home page while loading products in the background
      if (location.pathname !== "/") {
        dispatch(showSpinner());
      }
      const honey = await getProducts("Honey");
      const cider = await getProducts("Cider");
      setHoneyProducts(honey);
      setCiderProducts(cider);
      dispatch(hideSpinner());
    };
    fetchProducts();
  }, [dispatch, location.pathname]);

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
      {alert && (
        <Alert
          className="alert"
          variant="warning"
          dismissible
          onClose={() => dispatch(hideAlert())}
        >
          {alertMessage}
        </Alert>
      )}
    </div>
  );
}

export default App;
