import React from "react";
import mealsImg from "../../assets/meals.jpg";
import "./Header.scss";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>header</h1>
        <HeaderCardButton onClick = {props.onShow} />
      </header>
      <div className="main-image">
        <img src={mealsImg} alt="Meals" />
      </div>
    </>
  );
};
export default Header;
