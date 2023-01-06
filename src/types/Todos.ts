export interface TodosState {
  todos: any[],
  page: number,
  error: null | string,
  limit: number,
  loading: boolean,
}

export enum todoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
}

export enum pageLimitType {
  SET_PAGE_LIMITS = "SET_PAGE_LIMITS"
}


interface FetchTodoAction {
  type: todoActionTypes.FETCH_TODOS,
}

interface FetchSuccessTodoAction {
  type: todoActionTypes.FETCH_TODOS_SUCCESS,
  payload: any[]
}

interface FetchErrorTodoAction {
  type: todoActionTypes.FETCH_TODOS_ERROR,
  payload: string
}

interface SET_PAGE_LIMITS {
  type: pageLimitType.SET_PAGE_LIMITS,
  payload: {
    page: number,
    limit: number,
  }
}

export type PageLimitAction = SET_PAGE_LIMITS

export type TodoAction =
  FetchTodoAction
  | FetchSuccessTodoAction
  | FetchErrorTodoAction
  | SET_PAGE_LIMITS