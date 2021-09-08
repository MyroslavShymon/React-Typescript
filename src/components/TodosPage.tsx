import * as React from "react";
import axios from "axios";
import { ITodo } from "../types";
import List from "./List";
import TodoItem from "./TodoItem";

interface TodosPageProps {}

const TodosPage: React.FC<TodosPageProps> = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  React.useEffect(() => {
    fetchTodos();
  }, []);
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
    ></List>
  );
};

export default TodosPage;
