import {RootState} from "store"
import {createSelector} from "@reduxjs/toolkit";

const ProcessesSelector = (state: RootState) => state.processes;
export const selectAllProcesses = createSelector(ProcessesSelector, state => state.items);
