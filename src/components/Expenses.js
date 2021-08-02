import React, { useState } from "react";

import "./Expenses.css";

const Expenses = ({ group, action }) => {
  const [date, setDate] = useState("");

  const handleClick = (index) => {
    let selectedExpenseItem = group.expenses[index];
    action(selectedExpenseItem);
  };

  function handleSubmit(event) {
    event.preventDefault();
    group.expenses.push({ date: date });
    action(group);
  }

  function onChange(input) {
    setDate(input.target.value);
  }

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
      {expenseItems.length > 0 && <div>{expenseItems} </div>}

      <form className="row" onSubmit={handleSubmit}>
        <div className="col-date">
          <input
            type="text"
            value={date}
            placeholder="Date"
            onChange={onChange}
          />
        </div>
        {/* <div className="col-item">
            <input
              type="text"
              value={description}
              placeholder="Description"
              onChange={onChange}
            />
          </div>
          <div className="col-price">
            <input
              type="text"
              value={amount}
              placeholder="$0.00"
              onChange={onChange}
            />
          </div> */}
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default Expenses;
