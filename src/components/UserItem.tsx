import * as React from "react";
import { IUser } from "../types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      style={{ padding: 15, border: "1px solid grey" }}
    >
      {user.id}. {user.name} live at the city - {user.address.city} in street{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
