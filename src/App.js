import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CardProvider from "./context/CardProvider";
function App() {
  const [visible, setVisible] = useState(false);
  const showCardHandler = () => {
    setVisible(true);
  };
  const hideCardHandler = () => {
    setVisible(!visible);
  };
  return (
    <CardProvider>
      {visible && <Card onClose={hideCardHandler}/>}
      <Header onShow={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
