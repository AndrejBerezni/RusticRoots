import './Account.css'
import { motion } from 'framer-motion'
import { Col, Row, Container, Button, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import bear from '../../Assets/bear.png'
import stripe from '../../Assets/stripe-logo.png'

const framerAnimate = {
  x: 0,
  opacity: 1,
  scale: 1,
}

const framerInitial = {
  x: -200,
  opacity: 0,
  scale: 0,
}

const framerTransition = {
  duration: 1.2,
}

export default function Account() {
  const userEmail = useSelector((state) => state.signedIn.user.email)
  return (
    <Container className="account-page">
      <Row>
        <Col xs={12} md={5}>
          <motion.img
            className="account-page-image"
            src={bear}
            animate={framerAnimate}
            initial={framerInitial}
            transition={framerTransition}
          />
        </Col>
        <Col xs={12} md={5}>
          <motion.div
            className="account-page-details-div"
            animate={framerAnimate}
            initial={framerInitial}
            transition={framerTransition}
          >
            <h2 className="account-page-email">{userEmail}</h2>
            <p className="account-page-text">
              Payments on Rustic Roots are powered by
            </p>
            <Image className="stripe-logo" src={stripe} />
            <p className="account-page-text">
              To view and change your billing information and see history of
              your invoices, start by clicking the button below.
            </p>
            <Button
              as={Link}
              to="https://billing.stripe.com/p/login/test_eVa8yE7xe5N63TybII"
              className="account-page-stripe-link"
            >
              Go to Stripe Customer Portal
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  )
}
