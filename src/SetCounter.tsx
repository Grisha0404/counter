import React, {ChangeEvent, useEffect} from 'react';

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
                <b style={{color: 'darkslategrey'}}>max value :  </b>
                <input style={{width: '20%', marginLeft:'10px'}} type={"number"} min={0} value={maxTitle} onChange={onChangeMaxTitleHandler}/>
            </div>
            <div>
                <b style={{color: 'darkslategrey'}}>reset value:</b>
                <input style={{width: '20%', marginLeft:'10px'}} min={0} type={"number"} value={startTitle} onChange={onChangeStartTitleHandler}/>
            </div>
        </div>
    );
};
