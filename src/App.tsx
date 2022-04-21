import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./counter";
import {SetCounter} from "./SetCounter";
import {restoreState, saveState} from "./localStorage";
import {Button} from "./button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {clickIncValueAC, clickResetValueAC, restoreStateAC, saveStateAC} from "./store/counter-reducer";

function App() {

    const number = useSelector<AppStateType, number>(state => state.counter.value)
    const maxTitle = useSelector<AppStateType, number>(state => state.counter.maxTitle)
    const startTitle = useSelector<AppStateType, number>(state => state.counter.startTitle)
    const dispatch = useDispatch()

    // let [maxTitle, setMaxTitle] = useState(0)
    // let [startTitle, setStartTitle] = useState(0)
    let [error, setError] = useState(false)

    const clickSet = () => {
        saveState('setting', {maxTitle: maxTitle, startTitle: startTitle})
        setError(true)
    }
    useEffect(() => {
        const state = restoreState('setting', {maxTitle: maxTitle, startTitle: startTitle})
        // setMaxTitle(state.max)
        // setStartTitle(state.min)
        dispatch(restoreStateAC(state.maxTitle))
        dispatch(saveStateAC(state.startTitle))
    }, [])

    const onChangeMaxTitleHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        //setMaxTitle(JSON.parse(e.currentTarget.value))
        dispatch(restoreStateAC(JSON.parse(e.currentTarget.value)))
    }, [dispatch])
    const onChangeStartTitleHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        // setStartTitle(JSON.parse(e.currentTarget.value))
        dispatch(saveStateAC(JSON.parse(e.currentTarget.value)))
    }, [dispatch])

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
                error ? <Counter number={number} clickInc={clickInc} clickReset={clickReset} maxTitle={maxTitle}
                                 startTitle={startTitle}/> : 'Pleas, set parameters!'
            }
        </div>
    );
}

export default App;
