import React, {useEffect, useState} from 'react';

import BlockCurrency from "./components/BlockCurrency/BlockCurrency";
import {useAppDispatch, useAppSelector} from "./hooks/redux-hooks";
import {getAllCurrencyThunk} from "./store/slices/currency.slice";

// @ts-ignore
const App = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCurrencyThunk());
    }, [])

    const {currencyList} = useAppSelector(state => state.currencyReducer);

    //@ts-ignore
    const {rates} = currencyList;

    const [onChangeCurrencyFrom, setOnChangeCurrencyFrom] = useState<string>('UAH');
    const [onChangeCurrencyTo, setOnChangeCurrencyTo] = useState<string>('USD');
    const [currencyFrom, setCurrencyFrom] = useState<number>(0);
    const [currencyTo, setCurrencyTo] = useState<number>(0);

    const onChangeFromPrice = (value : number) => {
        const price = value / rates[onChangeCurrencyFrom];
        const result = price * rates[onChangeCurrencyTo];
        setCurrencyTo(result)
        setCurrencyFrom(value)
    }

    const onChangeToPrice = (value : number) => {
        const result = (rates[onChangeCurrencyFrom] / rates[onChangeCurrencyTo]) * value;
        setCurrencyFrom(result);
        setCurrencyTo(value)
    }

    return (
        <div>
            <BlockCurrency onChangeCurrency={setOnChangeCurrencyFrom} value={currencyFrom}
                                          currency={onChangeCurrencyFrom} changeCurrencyPrice={onChangeFromPrice}/>
            <BlockCurrency onChangeCurrency={setOnChangeCurrencyTo} value={currencyTo} currency={onChangeCurrencyTo}
                           changeCurrencyPrice={onChangeToPrice}/>
        </div>
    );
};

export default App;