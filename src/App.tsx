import React, {useEffect} from 'react';
import {UsersList} from "./components/users/UsersList";
import {useActions} from "./hooks/useActions";

import './components/styles.scss';
import {TodoList} from "./components/todos/TodoList";
import {Pagination} from "./components/Pagination";
import {useTypedSelector} from "./hooks/useTypedSelector";

function App() {
  const {fetchUsers, fetchTodos} = useActions()
  const {limit, page} = useTypedSelector(state => state.todo)

  const handleTodoFetch = () => fetchTodos(page, limit)

  return (
    <div className="mainContainer">
      <UsersList />
      Hello World

      <div>
        <button onClick={() => fetchUsers()}>Fetch Users</button>
      </div>
      <div>
        <button onClick={handleTodoFetch}>Fetch Todos</button>
      </div>

      <div>
        <TodoList />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
