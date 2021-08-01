import React from "react";

import "./Expenses.css";

const Expenses = ({ group, action }) => {
  const handleClick = (index) => {
    let selectedExpenseItem = group.expenses[index];
    action(selectedExpenseItem);
  };

  var expenseItems = [];
  if (group != null) {
    expenseItems = group.expenses.map((expense, index) => (
      <div className="row" key={index}>
        <div className="col-date">{expense.date}</div>
        <div className="col-item">
          <button onClick={handleClick.bind(this, index)}>
            {expense.item}
          </button>
        </div>
        <div className="col-price">${expense.amount}</div>
        <button>delete</button>
        <button>edit</button>
      </div>
    ));
  }

  return (
    <div className="expenses-items" style={{ border: "solid" }}>
      {group != null && <h1>{group.name}</h1>}
      {expenseItems.length > 0 && <div>{expenseItems}</div>}
    </div>
  );
};

export default Expenses;
