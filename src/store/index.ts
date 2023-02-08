import {AnyAction, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {processesSlice} from "./slices/processes/processes.slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";




export const store = configureStore({
    reducer: {
        [processesSlice.name]: processesSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
