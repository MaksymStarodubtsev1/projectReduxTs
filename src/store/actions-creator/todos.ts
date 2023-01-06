import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {PageLimitAction, pageLimitType, TodoAction, todoActionTypes} from "../../types/Todos";

export const fetchTodos = (page= 1, limit = 0) => {

  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({type: todoActionTypes.FETCH_TODOS})

      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {_page: page, _limit: limit}
      })
      setTimeout(() => {
        dispatch({type: todoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
      }, 500)

      console.log('responseTodo', response.data)
    } catch(error) {
      dispatch({type: todoActionTypes.FETCH_TODOS_ERROR, payload: 'Error'})
    }
  }
}

export const setPageLimit = ({page= 0, limit=0}) => {
  return (dispatch: Dispatch<PageLimitAction>) => {
    dispatch({type: pageLimitType.SET_PAGE_LIMITS, payload: {
        page,
        limit
      }})
  }
}