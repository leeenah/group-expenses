import React from "react";

const Group = (props) => {
  const group = props.groups.map((groupName, index) => (
    <li key={index}>{groupName.name}</li>
  ));

  return (
    <div className="group-panel">
      <h3>List of groups:</h3>
      {/* onClick on the group name, 
          it will open up the Expenses for the group and display extra information */}
      <ul>{group}</ul>
    </div>
  );
};

export default Group;
