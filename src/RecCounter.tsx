import React from 'react';
import {Button} from "./button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {clickIncValueAC, clickResetValueAC} from "./store/counter-reducer";


const RecCounter = () => {
    const number = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    // let [number, setNumber] = useState<number>(0)
    const clickInc = () => {
        dispatch(clickIncValueAC())
        //setNumber(number + 1)
    }
    // const clickReset = () => {
    //     dispatch(clickResetValueAC(100))
    //     //setNumber(startTitle)
    // }
    return (
        <div>
            <div>{number}</div>
            <div>
                <Button name={'inc'} callBack={clickInc} disable={false} />
            </div>

        </div>
    );
};

export default RecCounter;