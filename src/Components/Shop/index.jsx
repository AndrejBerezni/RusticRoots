import './Shop.css'
import Container from 'react-bootstrap/Container'
import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Shop() {
  const location = useLocation()

  return (
    <Container className="shop">
      <div>
        <Link
          className={
            location.pathname === '/shop/honey' || location.pathname === '/shop'
              ? 'active'
              : ''
          }
          to="/shop/honey"
        >
          Honey
        </Link>
        <Link
          className={location.pathname === '/shop/cider' ? 'active' : ''}
          to="/shop/cider"
        >
          Apple Cider
        </Link>
      </div>
      <Outlet />
    </Container>
  )
}
