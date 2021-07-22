import CardIcon from "../Card/CardIcon";
import { useContext, useEffect, useState } from "react";
import CardContext from "../../context/card-context";
import "./HeaderCardButton.scss";

const HeaderCardButton = (props) => {
  const [btnBump, setBtnBump] = useState(false);
  const cardCtx = useContext(CardContext);
  const { item } = cardCtx;

  const numberOfCardItems =
    cardCtx.item &&
    cardCtx.item.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

  const bump = "bump";
  const button = "button";

  useEffect(() => {
    if (cardCtx.item.length === 0) {
      return;
    }
    setBtnBump(true);

    const timer = setTimeout(()=>{
      setBtnBump(false);
    },300)
    return () => {
      clearTimeout(timer)
    };
  }, [item]);
  return (
    <button className={`${button} ${btnBump ? bump :" "}`} onClick={props.onClick}>
      <span className="icon">
        <CardIcon />
      </span>
      <span>Card</span>
      <span className="badge">{numberOfCardItems && numberOfCardItems}</span>
    </button>
  );
};

export default HeaderCardButton;
