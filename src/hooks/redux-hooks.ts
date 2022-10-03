import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {AppDispatch, AppState} from "../store/store";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export {
    useAppDispatch,
    useAppSelector
};