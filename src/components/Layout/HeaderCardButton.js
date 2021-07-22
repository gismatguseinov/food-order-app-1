import CardIcon from "../Card/CardIcon";
import { useContext } from "react";
import CardContext from "../../context/card-context";
import "./HeaderCardButton.scss";
const HeaderCardButton = (props) => {
  const cardCtx = useContext(CardContext);
  const numberOfCardItems = cardCtx.item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CardIcon />
      </span>
      <span>Card</span>
      <span className="badge">{numberOfCardItems}</span>
    </button>
  );
};

export default HeaderCardButton;
