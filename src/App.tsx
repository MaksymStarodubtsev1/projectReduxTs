import React from 'react';
import {UsersList} from "./components/UsersList";
import {fetchUsers} from "./store/actions-creator/user";
import {useTypedDispatch} from "./hooks/useTypedDispatch";

function App() {
  const dispatch = useTypedDispatch()

  return (
  <div>
    <UsersList />
    Hello World

    <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
  </div>
  );
}

export default App;
