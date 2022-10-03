import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ICurrency} from "../../interfaces/currency.interface";
import {currencyService} from "../../services/currency.service";

export const getAllCurrencyThunk = createAsyncThunk(
    'currencySlice/getAllCurrencyThunk',
    async (_, {dispatch}) => {
        let {data} = await currencyService.getAll();
        dispatch(getAllCurrency(data));
    }
);

interface IState {
    currencyList: ICurrency[];
}

const initialState: IState = {
    currencyList: [],
};

const currencySlice = createSlice({
    name: 'currencySlice',
    initialState,
    reducers: {
        getAllCurrency: (state, action: PayloadAction<ICurrency[]>) => {
            state.currencyList = action.payload;
        }
    },

});

export const currencyReducer = currencySlice.reducer;

export const {getAllCurrency} = currencySlice.actions;