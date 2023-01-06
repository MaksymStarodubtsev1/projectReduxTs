import {pageLimitType, TodoAction, todoActionTypes, TodosState} from "../../types/Todos";

const initialState: TodosState = {
  todos: [],
  page: 1,
  error: null,
  limit: 0,
  loading: false,
}

export const todoReducer = (state = initialState, action: TodoAction): TodosState => {
  switch(action.type) {
    case todoActionTypes.FETCH_TODOS:
      return {
        ...state,
        loading: true,
      }

    case todoActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        error: null,
        loading: false,
      }

    case todoActionTypes.FETCH_TODOS_ERROR:
      return {
        ...state,
        todos: [],
        error: "Error happened",
        loading: false,
      }

    case pageLimitType.SET_PAGE_LIMITS:
      return {
        ...state,
        page: action.payload.page,
        limit: action.payload.limit,
      }

    default: return state
  }
}