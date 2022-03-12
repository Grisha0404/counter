import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./counter";
import {SetCounter} from "./SetCounter";
import {restoreState, saveState} from "./localStorage";
import {Button} from "./button";

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
        setStartTitle(JSON.parse(e.currentTarget.value))
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
                error ? <Counter maxTitle={maxTitle} startTitle={startTitle}/>: 'Pleas, set parameters!'
            }

        </div>
    );
}

export default App;
