import React from 'react';
import {UsersList} from "./components/UsersList";

import {useTypedDispatch} from "./hooks/useTypedDispatch";
import {useActions} from "./hooks/useActions";

function App() {
  const {fetchUsers} = useActions()

  return (
  <div>
    <UsersList />
    Hello World

    <button onClick={() => fetchUsers()}>Fetch Users</button>
  </div>
  );
}

export default App;
