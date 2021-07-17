import React from "react";

const Group = (props) => {
  const group = props.groups.map((groupName, index) => (
    <li key={index}>{groupName.name}</li>
  ));

  return (
    <div className="group-panel">
      <ul>{group}</ul>
    </div>
  );
};

export default Group;
