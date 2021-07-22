import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  removeItem: (id) => {},
  addItem: (item) => {},
});
export default CartContext;
