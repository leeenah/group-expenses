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
      expenses: [
        {
          date: "July 17, 2021",
          vendor: "Urban Fare",
          item: "Groceries",
          description: "groceries for the week",
          amount: 5.0,
        },
        {
          date: "July 30, 2021",
          vendor: "Urban Fibre",
          item: "internet",
          description: "monthly internet bill",
          amount: 90.0,
        },
      ],
    },
    {
      name: "Mexico Trip",
      type: "vacation",
      expenses: [],
    },
    {
      name: "Lena's Birthday",
      type: "other",
      expenses: [],
    },
  ]);

  const [selectedGroup, setSelectedGroup] = useState(null);

  function openGroupExpense(group) {
    setSelectedGroup(group);
  }

  return (
    <div className="App">
      {/**TODO - Add Header Component */}
      <h1>Group Expenses</h1>
      <div className="row">
        <div className="col">
          <Group groups={groups} action={openGroupExpense} />
        </div>
        <div className="col">
          <Expenses group={selectedGroup} />
        </div>
        <div className="col">
          <ItemDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
