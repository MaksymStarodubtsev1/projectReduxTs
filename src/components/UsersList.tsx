import React from "react";
import {useSelector} from 'react-redux'
import {useTypedSelector} from "../hooks/useTypedSelector";


export const UsersList: React.FC = () => {

  const state = useTypedSelector(state => state.user)
  console.log('state', state)
  return (
    <div>edde</div>
  )
}