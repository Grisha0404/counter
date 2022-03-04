import React from 'react';
import {Button} from "./button";

type CounterType = {
    number: number
    clickInc: () => void
    clickReset: () => void
    maxTitle: number
    startTitle: number
}

export const Counter: React.FC<CounterType> = ({number, clickReset, clickInc, maxTitle, startTitle}) => {

    return (
        <div className={'App'}>
            <div className={number === maxTitle ? 'red' : 'Number'}>{number}</div>
            <Button number={number} startTitle={startTitle} maxTitle={maxTitle} clickInc={clickInc} clickReset={clickReset}/>
        </div>
    );
};
