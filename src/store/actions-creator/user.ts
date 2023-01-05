import {UserAction, UserActionTypes} from "../../types/Users";
import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS})

      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => {
        dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
      }, 500)

      console.log('response', response)
    } catch(error) {
      dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Error'})
    }
  }
}