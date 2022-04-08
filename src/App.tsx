import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./counter";
import {SetCounter} from "./SetCounter";
import {restoreState, saveState} from "./localStorage";
import {Button} from "./button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {clickIncValueAC, clickResetValueAC, startValueAC} from "./store/counter-reducer";
import RecCounter from "./RecCounter";

function App() {
    let [maxTitle, setMaxTitle] = useState(0)
    let [startTitle, setStartTitle] = useState(0)
    let[error, setError] = useState(false)

    const clickSet = () => {
        saveState('setting', {max: maxTitle, min: startTitle})
        setError(true)
    }
    useEffect(() => {
        const state = restoreState('setting', {max: maxTitle, min: startTitle})
        setMaxTitle(state.max)
        setStartTitle(state.min)
    }, [])

    const onChangeMaxTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxTitle(JSON.parse(e.currentTarget.value))
    }
    const onChangeStartTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        startValueAC(JSON.parse(e.currentTarget.value))
    }
    const number = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    // let [number, setNumber] = useState<number>(0)
    const clickInc = () => {
        dispatch(clickIncValueAC())
        //setNumber(number + 1)
    }
    const clickReset = () => {
        dispatch(clickResetValueAC(startTitle))
        //setNumber(startTitle)
    }
    return (
        <div>
            <div className={'App'}>
                <SetCounter maxTitle={maxTitle} startTitle={startTitle}
                            onChangeMaxTitleHandler={onChangeMaxTitleHandler}
                            onChangeStartTitleHandler={onChangeStartTitleHandler}/>
                <Button callBack={clickSet} name={'set'} disable={maxTitle <= startTitle}/>
            </div>
            {
                error ? <Counter number={number} clickInc={clickInc} clickReset={clickReset} maxTitle={maxTitle} startTitle={startTitle}/>: 'Pleas, set parameters!'
            }
         {/*   <RecCounter />*/}

        </div>
    );
}

export default App;
