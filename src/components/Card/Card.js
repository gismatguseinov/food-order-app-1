import { useContext } from "react";
import Modal from "../UI/Modal";
import CardContext from "../../context/card-context";
import CardItem from "./CartItem";
import "./Card.scss";
const Card = (props) => {
  const cardCtx = useContext(CardContext);
  const totalAmount = `$${Number.parseFloat(cardCtx.totalAmount).toFixed(2)}`;
  const hasItems =  cardCtx.item && cardCtx.item.length >0;
  const removeItem = (id) => {
    cardCtx.removeItem(id);
  };

  const addItem = (item) => {
    // item.amount = 1;
    cardCtx.addItem(item);
  };

  const cartItems = (
    <ul className="cart-items">
      {cardCtx.item && cardCtx.item.map((i) => (
        <CardItem
          key={i.id}
          price={i.price}
          amount={i.amount}
          name={i.name}
          onAdd={addItem.bind(null, i)}
          onRemove={removeItem.bind(null, i.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total </span> 
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>Close</button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Card;
