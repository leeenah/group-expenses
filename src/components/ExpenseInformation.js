import React from "react";

const ExpenseInformation = ({ expense }) => {
  return (
    <div className="expense-information" style={{ border: "solid" }}>
      <div>
        {expense != null && <strong>More about this expense:</strong>}
        {expense != null && <p>Item: {expense.item}</p>}
      </div>

      {expense != null && <p>Paid by: {expense.paid_by}</p>}
      {expense != null && <p>Date of Purchase: {expense.date}</p>}
      {expense != null && <p>Retail: {expense.vendor}</p>}
      {expense != null && <p>Description: {expense.description}</p>}
    </div>
  );
};

export default ExpenseInformation;
