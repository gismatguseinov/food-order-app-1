import { useRef, useState } from "react";
import Input from "../../UI/Input";
import "./MealItemForm.scss";

const MealItemForm = (props) => {
  const [error, setError] = useState(false);
  const amountRef = useRef(null);

  const submitHandlerForm = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount > 10 ||
      enteredAmount < 1
    ) {
      setError(true);
      return;
    }

    props.onAddToCard(enteredAmountNumber);
  };
  return (
    <form className="form" onSubmit={submitHandlerForm}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {error && (
        <p style={{color:"red"}}>Enter number 1-10</p>
      )}
    </form>
  );
};

export default MealItemForm;
