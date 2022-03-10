import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
    disable:boolean
}

export const Button: React.FC<ButtonType> = ({name, callBack, disable}) => {

    const onClickHandler = () => {
        callBack()
    }
    return (
        <div className="button">
            <button  onClick={onClickHandler} disabled={disable}>{name}</button>
        </div>
    );
};
