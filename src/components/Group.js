import React from "react";

const Group = (props) => {
  const group = props.groups.map((groupName, index) => (
    <li key={index}>{groupName.name}</li>
  ));

  return (
    <div className="group-panel">
      <h3>List of groups:</h3>
      <ul>{group}</ul>
    </div>
  );
};

export default Group;
