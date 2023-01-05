import {store} from "../store";
import {useDispatch} from "react-redux";

export const useTypedDispatch: () => typeof store.dispatch = useDispatch