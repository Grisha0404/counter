import React from 'react';

type ButtonType = {
    number: number
    clickInc: () => void
    clickReset: () => void
    maxTitle: number
    startTitle: number
}

export const Button: React.FC<ButtonType> = ({number, clickInc, clickReset, maxTitle, startTitle}) => {
    return (
        <div className="button">
            <button className="buttonInc" disabled={number === maxTitle} onClick={clickInc}>inc</button>
            <button className="buttonRes" disabled={number === startTitle} onClick={clickReset}>reset</button>
        </div>
    );
};
