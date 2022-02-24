import React from 'react';

type ButtonType = {
    number: number
    clickInc: () => void
    clickReset: () => void
}

export const Button: React.FC<ButtonType> = ({number, clickInc, clickReset}) => {
    return (
        <div className="button">
            <button className="buttonInc" disabled={number === 5} onClick={clickInc}>inc</button>
            <button className="buttonRes" disabled={number === 0} onClick={clickReset}>reset</button>
        </div>
    );
};
