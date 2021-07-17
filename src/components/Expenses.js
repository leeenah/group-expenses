import React from "react";

const Expenses = (props) => {
  return (
    <div className="Expenses">
      <h2>Total: $95.00</h2>
      <ul>
        <li>
          2601 Cambie - {props.expenses[0].item} ${props.expenses[0].amount}
        </li>
        <li>
          2601 Cambie - {props.expenses[1].item} ${props.expenses[1].amount}
        </li>
      </ul>
    </div>
  );
};

export default Expenses;
