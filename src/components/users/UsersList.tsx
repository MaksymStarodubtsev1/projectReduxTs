import React from "react";
import "../styles.scss";

import {useTypedSelector} from "../../hooks/useTypedSelector";

export const UsersList: React.FC = () => {

  const {users, loading, error} = useTypedSelector(state => state.user)
  console.log('state', users)
  if(loading) {
    return <h1>...loading</h1>
  }
  if(error) {
    return <span>{error}</span>
  }
  return (
    <>
      {
        users.map(({id, name}) => (
          <div className="block" key={id}>{name}</div>
        ))
      }
    </>
  )
}