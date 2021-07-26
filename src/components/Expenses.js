import React from "react";

import "./Expenses.css";

const Expenses = ({ group }) => {
  var expenseItems = [];
  if (group != null) {
    expenseItems = group.expenses.map((expense, index) => (
      <div className="row" key={index}>
        <div className="col-item">{expense.item}</div>
        <div className="col-price">${expense.amount}</div>
      </div>
    ));
  }

  return (
    <div className="expenses-items" style={{ border: "solid" }}>
      {group != null && <h1>{group.name}</h1>}
      {expenseItems.length > 0 && <div> {expenseItems}</div>}
    </div>
  );
};

export default Expenses;
