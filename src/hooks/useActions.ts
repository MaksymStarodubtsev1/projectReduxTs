import {useTypedDispatch} from "./useTypedDispatch";
import {bindActionCreators} from "@reduxjs/toolkit";

import ActionCreators from '../store/actions-creator/'

export const useActions = () => {
  const dispatch = useTypedDispatch()

  return bindActionCreators(ActionCreators, dispatch)
}