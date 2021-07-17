import Group from "./components/Group";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Group Expense</h1>
      <div class="container">
        <div class="row">
          <div class="col-1">
            <Group />
          </div>
          <div class="col-2">col-2</div>
          <div class="col-3">col-3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
