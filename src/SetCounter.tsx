import React, {ChangeEvent} from 'react';

type SetCounterType = {
    maxTitle: number
    startTitle: number
    onChangeMaxTitleHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartTitleHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SetCounter: React.FC<SetCounterType> = ({
                                                         maxTitle,
                                                         onChangeMaxTitleHandler,
                                                         onChangeStartTitleHandler,
                                                         startTitle
                                                     }) => {

    return (
        <div>
            <div>
                <b style={{color: 'darkslategrey'}}>max value:</b>
                <input type={"number"} value={maxTitle} onChange={onChangeMaxTitleHandler}/>
            </div>
            <div>
                <b style={{color: 'darkslategrey'}}>start value:</b>
                <input type={"number"} value={startTitle} onChange={onChangeStartTitleHandler}/>
            </div>
        </div>
    );
};
