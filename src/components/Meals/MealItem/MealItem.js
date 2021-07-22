import { useContext } from "react";
import "./MealItem.scss";
import MealItemForm from "./MealitemForm";
import CardContext from "../../../context/card-context";
const MealItem = (props) => {
  const cartCtx = useContext(CardContext);

  const price = `$${Number.parseFloat(props.price).toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCard={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
