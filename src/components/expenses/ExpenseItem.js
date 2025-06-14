import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";
import "./ExpenseItem.css";

export default function ExpenseItem({ date, title, amount }) {
  const [newTitle, setNewTitle] = useState(title);

  function clickHandler() {
    setNewTitle("Updated!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
