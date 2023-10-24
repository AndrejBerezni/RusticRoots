import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Spinner from 'react-bootstrap/Spinner'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route, useLocation } from 'react-router-dom'
import Account from './Components/Account'
import Home from './Components/Home'
import Navigation from './Components/Navbar'
import Shop from './Components/Shop'
import ProductSection from './Components/Shop/ProductSection'
import { getProducts } from './firebase'
import { showSpinner, hideSpinner } from './ReduxActions/showSpinnerActions'

function App() {
  const dispatch = useDispatch()
  const location = useLocation()
  const [honeyProducts, setHoneyProducts] = useState([])
  const [ciderProducts, setCiderProducts] = useState([])
  const spinner = useSelector((state) => state.showSpinner)

  // Scroll to the top of the page when you change page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Load products:
  useEffect(() => {
    const fetchProducts = async () => {
      // Don't show spinner on home page or account page while loading products in the background
      if (location.pathname !== '/' && location.pathname !== '/account') {
        dispatch(showSpinner())
      }
      const honey = await getProducts('Honey')
      const cider = await getProducts('Cider')
      setHoneyProducts(honey)
      setCiderProducts(cider)
      dispatch(hideSpinner())
    }
    fetchProducts()
  }, [dispatch, location.pathname])

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
        <Route path="/*" element={<Home />} />
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
  )
}

export default App
