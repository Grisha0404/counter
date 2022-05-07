const initialState = {
    value: 0,
    maxTitle: 0,
    startTitle: 0
}
export type InitialStateType = typeof initialState

export const counterReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "INC-RESET-VALUE":
            return {
                ...state, value: action.value
            }
        case "GET_STATE":
            return {
                ...state, maxTitle: action.maxTitle
            }
        case 'SAVE_STATE':
            return {
                ...state, startTitle: action.startTitle
            }
        default:
            return state
    }
}

type ActionType = clickIncValueACType | clickResetValueACType | restoreStateACType | saveStateACType
type clickIncValueACType = ReturnType<typeof clickIncValueAC>
type clickResetValueACType = ReturnType<typeof clickResetValueAC>
type restoreStateACType = ReturnType<typeof restoreStateAC>
type saveStateACType = ReturnType<typeof saveStateAC>


export const clickIncValueAC = () => {
    return {type: 'INC-VALUE'} as const
}
export const clickResetValueAC = (value: number) => {
    return {type: 'INC-RESET-VALUE', value} as const
}
export const restoreStateAC = (maxTitle: number) => {
    return {
        type: 'GET_STATE',
        maxTitle
    } as const
}
export const saveStateAC = (startTitle: number) => {
    return {
        type: 'SAVE_STATE',
        startTitle
    } as const
}