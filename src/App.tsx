import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./counter";
import {SetCounter} from "./SetCounter";

function App() {
    let [number, setNumber] = useState<number>(0)
    let [maxTitle, setMaxTitle] = useState(5)
    let [startTitle, setStartTitle] = useState(1)

    const clickInc = () => {
        setNumber(number + 1)
    }
    const clickReset = () => {
        setNumber(startTitle)
    }

    const onChangeMaxTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxTitle(JSON.parse(e.currentTarget.value))
    }
    const onChangeStartTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartTitle(JSON.parse(e.currentTarget.value))
    }
    useEffect(() => {
        let maxTitleString = localStorage.getItem('counter')
        if (maxTitleString) {
            setMaxTitle(JSON.parse(maxTitleString))
        }
    }, [])
    useEffect(() => {
        let startTitleString = localStorage.getItem('counter')
        if (startTitleString) {
            setMaxTitle(JSON.parse(startTitleString))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(maxTitle))
    }, [maxTitle])
    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(setStartTitle))
    }, [startTitle])


    return (
        <div>
            <Counter number={number} maxTitle={maxTitle} startTitle={startTitle} clickInc={clickInc}
                     clickReset={clickReset}/>
            <SetCounter maxTitle={maxTitle} startTitle={startTitle} onChangeMaxTitleHandler={onChangeMaxTitleHandler}
                        onChangeStartTitleHandler={onChangeStartTitleHandler}/>
        </div>
    );
}

export default App;
