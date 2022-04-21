import React, {useState} from 'react';
import {Button} from "./button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {clickIncValueAC, clickResetValueAC} from "./store/counter-reducer";

type CounterType = {
    maxTitle: number
    startTitle: number
    number:number
    clickReset:()=>void
    clickInc:()=>void
}

export const Counter: React.FC<CounterType> = ({maxTitle, startTitle,number,clickReset,clickInc}) => {
    console.log('COUNTER')
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
