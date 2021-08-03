import React, { useState } from "react";

import "./Expenses.css";

const Expenses = ({ group, action }) => {
  const [expense, setExpense] = useState({
    date: "",
    description: "",
    amount: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleClick = (index) => {
    let selectedExpenseItem = group.expenses[index];
    action(selectedExpenseItem);
  };

  function handleSubmit(event) {
    event.preventDefault();

    group.expenses.push({
      date: expense.date,
      description: expense.description,
      amount: expense.amount,
    });
    action(group);
    setExpense({
      date: "",
      description: "",
      amount: "",
    });
  }

  // multiple inputs
  // ref: https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  function onChange(event) {
    const value = event.target.value;
    setExpense({ ...expense, [event.target.name]: value });
  }

  function toggleEditMode() {
    var currentIsEditing = isEditing;
    var newIsEditing = !currentIsEditing;
    setIsEditing(newIsEditing);
  }

  var expenseItems = [];
  if (group != null) {
    expenseItems = group.expenses.map((expense, index) => (
      <div className="row" key={index}>
        <div className="col-date">{expense.date}</div>
        <div className="col-item">
          <button onClick={handleClick.bind(this, index)}>
            {expense.description}
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
      {group != null && (
        <div>
          <h1>{group.name}</h1>

          {isEditing && (
            <form>
              <input type="text" />
            </form>
          )}

          <button onClick={toggleEditMode}>
            {isEditing ? "save" : "edit"}
          </button>
          {expenseItems.length > 0 && <div>{expenseItems} </div>}
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-date">
              <input
                type="text"
                name="date"
                value={expense.date}
                placeholder="Date"
                onChange={onChange}
              />
            </div>
            <div className="col-description">
              <input
                type="text"
                name="description"
                value={expense.description}
                placeholder="Description"
                onChange={onChange}
              />
            </div>
            <div className="col-price">
              <input
                type="text"
                name="amount"
                value={expense.amount}
                placeholder="$0.00"
                onChange={onChange}
              />
            </div>
            <button type="submit">+</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Expenses;
