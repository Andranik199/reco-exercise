import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 } from 'uuid';
import financeIcon from 'icons/finance.svg';
import shareIcon from 'icons/share.svg';
type ReportStatus = {
    processId: string,
    timeRemaining: string,
    status: "REPORT_GENERATION_STATUS_UNSPECIFIED"
}

export type MdsItem = {
    name: string;
    description: string;
    id: string;
    iconUrl: string;
    anchors?: {
        teams: Array<string>;
        domains: Array<string>;
        relatedTerms: Array<string>;
        users: Array<string>
    }
}
type mockedResponse = {
    reportStatus: Array<ReportStatus>,
    mds: Array<MdsItem>;
}

type InitialState = {
    items: Array<MdsItem>
}

const initialState: InitialState = {
    items: [{
        name: 'Finance',
        description: 'This process exmains the payroll flow within the Finanace department. This process was created for Ziv Cohen on 06.07.2021, 17:58',
        id: v4(),
        iconUrl: financeIcon
    }, {
        name: 'Patents',
        description: 'This process was created by Dalya Mazor on 06.07.2021, 17:58',
        id: v4(),
        iconUrl: shareIcon
    }]
}

export const processesSlice = createSlice({
    name: 'processes',
    initialState,
    reducers: {
        setNewItem: (state, action: PayloadAction<MdsItem>) => {
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
        },
        setItems: (state, action: PayloadAction<Array<MdsItem>>) => {
            return {
                ...state,
                items: action.payload
            }
        }
    }
})
