import React from "react";

import "./Expenses.css";

const Expenses = ({ group }) => {
  // const expenseItem = props.expenses.map((item, index) => (
  //   <li key={index}>{item.item}</li>
  // ));
  // const expensePrice = props.expenses.map((price, index) => (
  //   <li key={index}>${price.amount}</li>
  // ));

  return (
    <p>{group.name}</p>
    // <div className="expenses-items" style={{ border: "solid" }}>
    //   <h2>Total: $95.00</h2>
    //   <div className="row">
    //     <div className="col-item">
    //       {/* onClick on the expenseItem,
    //       it will open up the ItemDetail and display extra information */}
    //       {/* <ul>Item {expenseItem}</ul> */}
    //     </div>
    //     <div className="col-price">
    //       <ul style={{ listStyleType: "none" }}>Amount {expensePrice}</ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Expenses;
