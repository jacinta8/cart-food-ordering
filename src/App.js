import { useState } from "react"
import CartProvider from "./store/CartProvider"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart"

function App() {
  const [CartIsShown, SetCartIsShown] = useState(false)

  const ShowCartHandler = () => {
    SetCartIsShown(true)
  }
  const HideCartHandler = () => {
    SetCartIsShown(false)
  }
  return (
    <CartProvider>
      {CartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShow={ShowCartHandler} />
      <Meals />
    </CartProvider>
  )
}

export default App
