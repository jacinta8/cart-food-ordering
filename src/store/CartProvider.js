import { useReducer } from "react";
import CartContext from "./cart-context";
const defaultState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    const existingItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemsIndex];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemsIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE") {
    const existingItemsIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemsIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemsIndex] = updatedItem;
    }
    // if (action.type === "REMOVE") {
    //   const existingItemsIndex = state.items.findIndex(
    //     (item) => item.id === action.item.id
    //   );
    //   const existingItem = state.items[existingItemsIndex];
    //   const updatedTotalAmount = state.totalAmount - existingItem.price;
    //   let updatedItems;
    //   if (existingItem.amount === 1) {
    //     updatedItems = state.items.filter((item) => item.id !== action.item.id);
    //   } else {
    //     const updatedItem = {
    //       ...existingItem,
    //       amount: existingItem.amount - 1,
    //     };
    //     updatedItems = [...state.items];
    //     updatedItems[existingItemsIndex] = updatedItem;
    //   }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultState;
};

const CartProvider = (props) => {
  const [state, dispatchItem] = useReducer(cartReducer, defaultState);
  const addItemToCartHandler = (item) => {
    dispatchItem({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchItem({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
