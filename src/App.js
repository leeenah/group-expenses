import Group from "./components/Group";

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

  return (
    <div className="App">
      <h1>Group Expenses</h1>
      <div className="container">
        <div className="row">
          <div className="col-1">
            <Group groups={groups} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
