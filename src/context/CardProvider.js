import CardContext from "./card-context";
import React, { useReducer } from "react";

const defaultCardState = {
  item: [],
  totalAmount: 0,
};

const cardReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCardState;
};

const CardProvider = (props) => {
  const [cardState, dispatchCardAction] = useReducer(
    cardReducer,
    defaultCardState
  );

  const addItemToCardhandler = (item) => {
    dispatchCardAction({ type: "ADD", item: item });
  };
  const removeItemToCardhandler = (id) => {
    dispatchCardAction({ type: "REMOVE", id: id });
  };
  const contextData = {
    item: cardState.item,
    totalAmount: cardState.totalAmount,
    addItem: addItemToCardhandler,
    removeItem: removeItemToCardhandler,
  };

  return (
    <CardContext.Provider value={contextData}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardProvider;
