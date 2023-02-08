import {processesSlice} from "./processes.slice";

export const processesActions = {
    ...processesSlice.actions
}
export * as processesSelectors from './selectors';
