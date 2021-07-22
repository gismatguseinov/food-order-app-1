import Modal from "../UI/Modal";
import "./Card.scss";
const Card = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[
        {
          id: 1,
          name: "suhsi",
          amount: 2,
          price: 13.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total </span>
        <span>36.99</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>Close</button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Card;
