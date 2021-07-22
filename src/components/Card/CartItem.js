import "./CartItem.scss";

const CartItem = (props) => {
  const price = `$${props.price}`;

  return (
    <li className="cart-item__">
      <div>
        <h2>{props.name}</h2>
        <div className="summary__">
          <span className="price__">{price}</span>
          <span className="amount__">x {props.amount}</span>
        </div>
      </div>
      <div className="actions__">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
