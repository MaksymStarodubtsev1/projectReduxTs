import {useTypedDispatch} from "./useTypedDispatch";
import {bindActionCreators} from "@reduxjs/toolkit";

import * as ActionCreators from '../store/actions-creator/user'

export const useActions = () => {
  const dispatch = useTypedDispatch()

  return bindActionCreators(ActionCreators, dispatch)
}