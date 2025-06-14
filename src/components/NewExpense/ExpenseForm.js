import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //     title: '',
  //     amount: '',
  //     date: ''
  // });

  function titleChangeHnadler(event) {
    setTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     title: event.target.value
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, title: event.target.value}
    // })
  }

  function amountChangeHnadler(event) {
    setAmount(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     amount: event.target.value
    // });
  }

  function dateChangeHnadler(event) {
    setDate(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     date: event.target.value
    // });
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHnadler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHnadler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2025-6-12"
            onChange={dateChangeHnadler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
