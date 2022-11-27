import Card from "./Card";
import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDateFaltu from "./ExpeseDateFaltu";
function ExpenseItem(props) {
  const [currtitle, updatedTitle] = useState(props.title);
  const clickHandler = () => {
    updatedTitle("updated hehe");
  };

  return (
    <Card className="expense-item">
      <ExpenseDateFaltu date={props.time} />
      <div className="expense-item__description">
        <h2>{currtitle}</h2>
      </div>
      <div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clickHandler}>
        Update
      </button>
    </Card>
  );
}

export default ExpenseItem;
