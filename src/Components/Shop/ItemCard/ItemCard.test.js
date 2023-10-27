import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ItemCard from '.'

const mockStore = configureStore([])
const store = mockStore({})

const sampleProduct = {
  name: 'Acacia honey - pure',
  description:
    'Experience the pure essence of Acacia honey, sourced from pristine forests, where each spoonful unveils a delicate and velvety sweetness that lingers on your tongue.',
  size: '550g',
  category: 'Honey',
  image:
    'https://files.stripe.com/links/MDB8YWNjdF8xTk5DcVhLVXRYZXNadlZifGZsX3Rlc3RfeDB0QVRqOEIyemo2U0txOEdyRkt2dW14005F7r1PWV',
  price: 12,
}

let card

beforeEach(() => {
  render(
    <Provider store={store}>
      <ItemCard product={sampleProduct} />
    </Provider>
  )

  card = document.querySelector('.product-card')
})

describe('render ItemCard and its elements', () => {
  it('card buttons are rendered correctly', () => {
    const incrementButton = screen.getByText('+')
    const decrementButton = screen.getByText('-')
    const addButton = screen.getByText('Add to cart')

    const allButtons = [incrementButton, decrementButton, addButton]

    allButtons.forEach((btn) => expect(card).toContainElement(btn))
  })

  it('elements containing correct product information are rendered', () => {
    const cardImage = document.querySelector('img')
    const cardTitle = screen.getByText(sampleProduct.name)
    const cardDescription = screen.getByText(sampleProduct.name)
    const cardPrice = screen.getByText(`Price: €${sampleProduct.price}`)

    const textElements = [cardTitle, cardDescription, cardPrice]

    textElements.forEach((el) => expect(card).toContainElement(el))
    expect(cardImage.src).toContain(sampleProduct.image)
  })
})

describe('Buttons on ItemCard work properly', () => {
  it('increment and decrement buttons works', () => {
    const incrementButton = screen.getByText('+')
    const decrementButton = screen.getByText('-')
    const productCount = document.querySelector('.item-number')

    fireEvent.click(incrementButton)
    expect(productCount.textContent).toMatch('2')

    fireEvent.click(decrementButton)
    expect(productCount.textContent).toMatch('1')

    //Do not increment less than 1
    fireEvent.click(decrementButton)
    expect(productCount.textContent).toMatch('1')
  })

  it('reset counter after adding product to cart', () => {
    const addToCartButton = screen.getByText('Add to cart')
    const incrementButton = screen.getByText('+')
    const productCount = document.querySelector('.item-number')

    fireEvent.click(incrementButton)
    expect(productCount.textContent).toMatch('2')

    fireEvent.click(addToCartButton)
    expect(productCount.textContent).toMatch('1')
  })
})
