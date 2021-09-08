import * as React from "react";
import axios from "axios";
import { IUser } from "../types";
import { useParams, useHistory } from "react-router";

interface UserItemPageProps {
  id: string;
}

const UserItemPage: React.FC = () => {
  const [user, setUser] = React.useState<IUser | null>();
  const params = useParams<UserItemPageProps>();
  const history = useHistory();

  React.useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={() => history.push("/users")}>Back</button>
      <h1>This page is {user?.name}'s</h1>
      <div>{user?.email}</div>
      <div>{user?.address.city}</div>
    </div>
  );
};

export default UserItemPage;
