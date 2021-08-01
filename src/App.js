import React, { useState } from "react";
import Group from "./components/Group";
import Expenses from "./components/Expenses";
import ExpenseInformation from "./components/ExpenseInformation";

import "./App.css";

function App() {
  const [groups, setGroups] = useState([
    {
      name: "2601 Cambie",
      type: "home",
      expenses: [
        {
          date: "July 17, 2021",
          paid_by: "Pavel",
          vendor: "Urban Fare",
          item: "Urban Fare",
          category: "Groceries",
          description: "groceries for the week",
          amount: 5.0,
        },
        {
          date: "July 30, 2021",
          paid_by: "Pavel",
          vendor: "Urban Fibre",
          item: "Internet",
          category: "Utilites",
          description: "monthly internet bill",
          amount: 90.0,
        },
      ],
    },
    {
      name: "Mexico Trip",
      type: "vacation",
      expenses: [
        {
          date: "July 25, 2021",
          paid_by: "Lena",
          vendor: "Air Canada",
          item: "Air Canada",
          category: "Travel",
          description: "Flight tickets",
          amount: 2000.0,
        },
      ],
    },
    {
      name: "Mum's Birthday",
      type: "other",
      expenses: [],
    },
  ]);

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState(null);

  function openGroupExpense(group) {
    setSelectedGroup(group);
    setSelectedExpense(null);
  }

  function openExpenseInformation(expenseInformation) {
    setSelectedExpense(expenseInformation);
  }

  function addNewGroup(newExpenseGroup) {
    // https://stackoverflow.com/a/67354136
    var tempGroups = groups.slice();
    tempGroups.push({ name: newExpenseGroup, expenses: [] });
    setGroups(tempGroups);
  }

  return (
    <div className="App">
      {/**TODO - Add Header Component */}
      <h1>Group Expenses</h1>
      <div className="row">
        <div className="col">
          <Group
            groups={groups}
            action={openGroupExpense}
            newExpenseGroup={addNewGroup}
          />
        </div>
        <div className="col">
          <Expenses group={selectedGroup} action={openExpenseInformation} />
        </div>
        <div className="col">
          <ExpenseInformation expense={selectedExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
