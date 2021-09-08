import * as React from "react";
import axios from "axios";
import { IUser } from "../types";
import List from "./List";
import UserItem from "./UserItem";
import { useHistory } from "react-router";

interface UserPageProps {}

const UserPage: React.FC<UserPageProps> = () => {
  const history = useHistory();
  const [users, setUsers] = React.useState<IUser[]>([]);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const onUser = (user: IUser) => {
    history.push(`users/${user.id}`);
  };

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem onClick={onUser} key={user.id} user={user} />
      )}
    ></List>
  );
};

export default UserPage;
