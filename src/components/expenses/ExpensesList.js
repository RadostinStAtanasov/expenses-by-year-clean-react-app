import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  return (
    <div className="expenses-list">
      {props.filtered.length === 0 && (
        <p className="expenses-list__fallback">No expenses found</p>
      )}
      {props.expenses.length > 0 &&
        props.filtered.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </div>
  );
}
