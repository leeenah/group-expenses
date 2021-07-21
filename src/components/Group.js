import React from "react";

const Group = ({ groups }) => {
  const group = groups.map((groupName, index) => (
    <a href="/" onClick={openExpenseList}>
      <li key={index}>{groupName.name}</li>
    </a>
  ));

  var openExpenseList = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="group-panel">
      <h3>List of groups:</h3>
      {/* onClick on the group name, 
          it will open up the Expenses for the group and display list of expenses */}
      <a href="/">
        <ul>{group}</ul>
      </a>
    </div>
  );
};

export default Group;
