import React, {useState} from 'react';
import {Button} from "./button";

type CounterType = {
    maxTitle: number
    startTitle: number
}

export const Counter: React.FC<CounterType> = ({maxTitle, startTitle}) => {
    let [number, setNumber] = useState<number>(0)
    const clickInc = () => {
        setNumber(number + 1)
    }
    const clickReset = () => {
        setNumber(startTitle)
    }
    return (
        <div className={'App'}>
            <div className={number === maxTitle ? 'red' : 'Number'}>{number}</div>
            <div className={'buttonInc'}>
            <Button name={'inc'} callBack={clickInc} disable={number === maxTitle}/>
            </div>
            <div className={'buttonInc'}>
            <Button name={'reset'} callBack={clickReset} disable={number === startTitle}/>
            </div>
        </div>
    );
};
