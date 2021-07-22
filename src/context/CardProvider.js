import CardContext from "./card-context";
import React, { useReducer } from "react";

const defaultCardState = {
  item: [],
  totalAmount: 0,
};

const cardReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const exisitingCardItemIndex = state.item.findIndex(
      (i) => i.id === action.item.id
    );

    const exisitingCardItem = state.item[exisitingCardItemIndex];

    let updatedItems;
    if (exisitingCardItem) {
      const updatedItem = {
        ...exisitingCardItem,
        amount: exisitingCardItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[exisitingCardItemIndex] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const exisitingCardItemIndex = state.item.findIndex(
      (i) => i.id === action.id
    );
    const exisitingCardItem = state.item[exisitingCardItemIndex];

    const updatedTotalAmount = state.totalAmount - exisitingCardItem.price;

    let updatedItems;

    if (exisitingCardItem.amount === 1) {
      updatedItems = state.item.filter((i) => i.id !== action.id);
    } else {
      const updatedItem = {
        ...exisitingCardItem,
        amount: exisitingCardItem.amount - 1,
      };
      updatedItems = [...state.item];
      updatedItems[exisitingCardItemIndex] = updatedItem;
    }

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
