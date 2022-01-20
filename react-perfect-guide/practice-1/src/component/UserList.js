import React from "react";
import Card from "./UI/Card.js";
import UserData from "./UserData.js";

const UserList = (props) => {
  console.log(props.data);
  return (
    <Card>
      <ul style={{ padding: 0, padding: "15px" }}>
        {props.data.map((data) => (
          <UserData key={Math.random()} data={data} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
