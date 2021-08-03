import React, { useState } from "react";
import Group from "./components/Group";
import Expenses from "./components/Expenses";
// import ExpenseInformation from "./components/ExpenseInformation";

import "./App.css";

function App() {
  // update Mexico trip (with cccc)
  const [groups, setGroups] = useState([
    {
      id: 1000,
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
      id: 1001,
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
    { id: 1002, name: "Mum's Birthday", type: "other", expenses: [] },
  ]);

  const [selectedGroup, setSelectedGroup] = useState(null);
  // const [selectedExpense, setSelectedExpense] = useState(null);

  function openGroupExpense(group) {
    const clone = {
      id: group.id,
      name: group.name,
      type: group.type,
      expenses: group.expenses.slice(),
    };
    setSelectedGroup(clone);
    // setSelectedExpense(null);
  }

  // function openExpenseInformation(expenseInformation) {
  //   setSelectedExpense(expenseInformation);
  // }

  function addNewGroup(newExpenseGroup) {
    // https://stackoverflow.com/a/67354136
    var tempGroups = groups.slice();
    tempGroups.push({ name: newExpenseGroup, expenses: [] });
    setGroups(tempGroups);
  }

  function updateGroup(updatedGroup) {
    // Option 1 (use map)
    // Pros: simple
    // Cons: iterates over all of the items (so if there is million items
    // this map will iterate over million items - even if we're simply
    // trying to modify the first one or second one)
    // This is a performance hell
    const updatedGroups = groups.map((currentGroup) => {
      // Ideally we would compare id (unique identifier) and do a check
      // Because some groups could have the same name and that
      // would have side effects
      if (currentGroup.id === updatedGroup.id) {
        return updatedGroup;
      } else {
        return currentGroup;
      }
    });
    setGroups(updatedGroups);
  }

  return (
    <div className="App">
      {/**TODO - Add Header Component */}
      <h1>Group Expenses</h1>
      <div className="row">
        <div className="col-1">
          <Group
            groups={groups}
            action={openGroupExpense}
            newExpenseGroup={addNewGroup}
          />
        </div>
        {/** Conditional render so that when selectedGroup is true,
         * it will display the component */}
        {selectedGroup && (
          <div className="col-2">
            <Expenses group={selectedGroup} action={updateGroup} />
          </div>
        )}

        {/* <div className="col">
          <ExpenseInformation expense={selectedExpense} />
        </div> */}
      </div>
    </div>
  );
}

export default App;
