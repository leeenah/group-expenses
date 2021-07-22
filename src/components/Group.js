import React from "react";

const Group = ({ groups, expenses, action }) => {
  const handleClick = (index) => {
    let selectedGroup = groups[index];
    action(selectedGroup);
  };

  const group = groups.map((groupName, index) => (
    <li key={index}>
      <button onClick={handleClick.bind(this, index)}>{groupName.name}</button>
    </li>
  ));

  return (
    <div className="group-panel">
      <h3>List of groups:</h3>

      <ul>{group}</ul>
    </div>
  );
};

export default Group;
