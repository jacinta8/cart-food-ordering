import { useContext, useState, useEffect } from "react"
import classes from "./HeaderButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context"

const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext)
  const [IsButtonHighlighted, setButtonHighlighted] = useState(false)
  const { items } = cartCtx
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${
    IsButtonHighlighted ? classes.bump : ""
  }`

  useEffect(() => {
    if (numberOfCartItems === 0) {
      return
    }
    setButtonHighlighted(true)
    const timer = setTimeout(() => {
      setButtonHighlighted(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [items, numberOfCartItems])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}
export default HeaderButton
