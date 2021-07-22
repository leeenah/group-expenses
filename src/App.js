import React, { useState } from "react";
import Group from "./components/Group";
import Expenses from "./components/Expenses";
import ItemDetail from "./components/ItemDetail";

import "./App.css";

function App() {
  const [groups, setGroups] = useState([
    {
      name: "2601 Cambie",
      type: "home",
    },
    {
      name: "Mexico Trip",
      type: "vacation",
    },
    {
      name: "Lena's Birthday",
      type: "other",
    },
  ]);

  const [expenses, setExpenses] = useState([
    {
      name: "2601 Cambie",
      type: "home",
      date: "July 17, 2021",
      vendor: "Urban Fare",
      item: "Groceries",
      description: "groceries for the week",
      amount: 5.0,
    },
    {
      name: "2601 Cambie",
      type: "home",
      date: "July 30, 2021",
      vendor: "Urban Fibre",
      item: "internet",
      description: "monthly internet bill",
      amount: 90.0,
    },
  ]);

  const openGroupExpense = (group) => {
    console.log(group);
  };

  return (
    <div className="App">
      {/**TODO - Add Header Component */}
      <h1>Group Expenses</h1>
      <div className="row">
        <div className="col">
          <Group
            groups={groups}
            expenses={expenses}
            action={openGroupExpense}
          />
        </div>
        <div className="col">
          <Expenses expenses={expenses} />
        </div>
        <div className="col">
          <ItemDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
