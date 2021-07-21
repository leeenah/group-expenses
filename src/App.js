import Group from "./components/Group";
import Expenses from "./components/Expenses";

import "./App.css";

function App() {
  const groups = [
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
      type: "present",
    },
  ];

  const expenses = [
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
  ];

  return (
    <div className="App">
      <h1>Group Expenses</h1>
      <div className="row">
        <div className="col">
          <Group groups={groups} />
        </div>
        <div className="col">
          <Expenses expenses={expenses} />
        </div>
        <div className="col">column three</div>
      </div>
    </div>
  );
}

export default App;
