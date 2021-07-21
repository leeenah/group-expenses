import React from "react";

const Expenses = (props) => {
  const expenseItem = props.expenses.map((item) => <li>{item.item}</li>);

  const expensePrice = props.expenses.map((price) => <li>${price.amount}</li>);

  return (
    <div className="expenses-items">
      <h2>Total: $95.00</h2>
      <div className="row">
        <div className="col">
          {/* onClick on the expenseItem, 
          it will open up the ItemDetail and display extra information */}
          <ul>Item {expenseItem}</ul>
        </div>
        <div className="col">
          <ul>Amount {expensePrice}</ul>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
