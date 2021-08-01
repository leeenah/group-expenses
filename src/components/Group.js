import React, { useState } from "react";

const Group = ({ groups, action }) => {
  const [newGroup, setNewGroup] = useState("");

  const handleClick = (index) => {
    let selectedGroup = groups[index];
    action(selectedGroup);
  };

  function handleSubmit(event) {
    event.preventDefault();
    addNewGroup(newGroup);
    console.log(`Group Name: ${newGroup}`);
  }

  function addNewGroup() {
    console.log(`"${newGroup}" added to list`);
  }

  function AddNewGroupName(input) {
    setNewGroup(input.target.value);
  }

  const group = groups.map((groupName, index) => (
    <li key={index}>
      <button onClick={handleClick.bind(this, index)}>{groupName.name}</button>
      <button>-</button>
    </li>
  ));

  return (
    <div className="group-panel">
      <h3>List of groups:</h3>

      <form onSubmit={handleSubmit}>
        <button type="submit">+</button>
        <input
          type="text"
          placeholder="Add New Group"
          value={newGroup}
          onChange={AddNewGroupName}
        />
      </form>

      <ul>{group}</ul>
    </div>
  );
};

export default Group;
