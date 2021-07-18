import React from "react";

const Expenses = (props) => {
  const expenseList = props.expenses.map((item) => (
    <li>
      {item.item} ${item.amount}
    </li>
  ));

  return (
    <div className="Expenses">
      <h2>Total: $95.00</h2>
      <ul>2601 Cambie - {expenseList}</ul>
    </div>
  );
};

export default Expenses;
