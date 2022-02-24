import React, {useState} from 'react';
import {Button} from "./button";

export const Counter = () => {
    let [number, setNumber] = useState<number>(0)

    const clickInc = () => {
        setNumber(++number)
    }
    const clickReset = () => {
        setNumber(0)
    }

    return (
        <div >
            <div className={number===5 ? 'red':'Number'}>{number}</div>
            <Button number={number} clickInc={clickInc} clickReset={clickReset}/>
        </div>
    );
};
