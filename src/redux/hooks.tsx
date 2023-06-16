import { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'

export const useAppiDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
