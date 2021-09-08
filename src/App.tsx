import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Card, { CardBorderVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";
import TodoItemPage from "./components/TodoItemPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import UserPage from "./components/UserPage";

function App() {
  return (
    <BrowserRouter>
      {/*  <div className="App"> */}
      {/* <EventsExample />
      <Card
        onClick={(number: number) => console.log("click", number)}
        borderVariant={CardBorderVariant.dashed}
        width="100px"
        height="100px"
        border="green"
      >
        <button>Button</button>
      </Card> */}
      {/* <UserList users={users} /> */}

      {/* </div> */}
      <div>
        <div>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </div>
        <Route path={"/users"} exact>
          <UserPage></UserPage>
        </Route>
        <Route path={"/todos"} exact>
          <TodosPage></TodosPage>
        </Route>
        <Route path={"/users/:id"} exact>
          <UserItemPage></UserItemPage>
        </Route>
        <Route path={"/todos/:id"} exact>
          <TodoItemPage></TodoItemPage>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
