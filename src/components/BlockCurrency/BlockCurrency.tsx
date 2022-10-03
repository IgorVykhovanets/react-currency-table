import React, {FC} from 'react';

import './block.modules.scss'

const BlockCurrency: FC<{ onChangeCurrency: any; currency: {}, value: number, changeCurrencyPrice: any }> = ({
                                                                                                                 onChangeCurrency,
                                                                                                                 currency,
                                                                                                                 value,
                                                                                                                 changeCurrencyPrice
                                                                                                             }) => {

    const curList = ['UAH', 'EUR', 'USD'];

    return (
        <div>
            {curList.map(cur => (
                <ul className={'currencyList'}>
                    <li onClick={() => onChangeCurrency(cur)}
                        className={currency === cur ? 'active' : ''}
                    >
                        {cur}
                    </li>
                </ul>
            ))}
            <input type="number" value={value} onChange={(e) => changeCurrencyPrice(e.target.value)}/>
        </div>
    );
};

export default BlockCurrency;