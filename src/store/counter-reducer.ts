const initialState = {
    value: 0
}
type InitialStateType = typeof initialState

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
        // case "INC-MAX-VALUE":
        // case "INC-START-VALUE":
        //     return {
        //         ...state, value: action.number
        //     }
        default:
            return state
    }
}

type ActionType = clickIncValueACType | clickResetValueACType
type clickIncValueACType = ReturnType<typeof clickIncValueAC>
type clickResetValueACType = ReturnType<typeof clickResetValueAC>
type startValueACType = ReturnType<typeof startValueAC>
type maxValueACType = ReturnType<typeof maxValueAC>

export const clickIncValueAC = () => {
    return {type: 'INC-VALUE'}as const
}
export const clickResetValueAC = (value:number) => {
    return {type: 'INC-RESET-VALUE', value}as const
}
export const startValueAC = (number:string) => {
    return {type: 'INC-START-VALUE', number}
}
export const maxValueAC = (number:string) => {
    return {title: 'INC-MAX-VALUE', number}
}
