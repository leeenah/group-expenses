import React, { useState } from "react";

const Group = ({ groups, action, newExpenseGroup }) => {
  const [newGroup, setNewGroup] = useState("");

  const handleClick = (index) => {
    let selectedGroup = groups[index];
    action(selectedGroup);
  };

  function handleSubmit(event) {
    event.preventDefault();
    newExpenseGroup(newGroup);
    setNewGroup("");
  }

  function addNewGroupName(input) {
    setNewGroup(input.target.value);
  }

  const group = groups.map((groupName, index) => (
    <li key={index}>
      <button onClick={handleClick.bind(this, index)}>{groupName.name}</button>
    </li>
  ));

  return (
    <div className="group-panel">
      <h3>List of groups:</h3>

      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          // Button has an attribute called 'disabled' which is set to either true or false.
          // This depends on the length of the newGroup string.
          // Default state is an empty string which means this is true, resulting the button to be disabled.
          // When the user adds at least 1 character, this updates the value of the state (via onChange)
          // which then passes the value in setNewGroup. This updates the state value to a string 'q' (ie the input from the user is q)
          // so now it will re render and the disabled attribute is now performing a comparison of 'q'.length === 0
          // which is same as {1 === 0} so this is false. This will enable the button.

          disabled={newGroup.length === 0}
        >
          +
        </button>

        <input
          type="text"
          placeholder="Add New Group"
          value={newGroup}
          onChange={addNewGroupName}
        />
      </form>

      <ul>{group}</ul>
    </div>
  );
};

export default Group;
