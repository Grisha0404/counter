import {counterReducer, InitialStateType} from "../counter-reducer";


let initialState: InitialStateType
beforeEach(()=>{
    initialState = {
        value: 10,
        maxTitle: 3,
        startTitle: 2
    }
})

test('inc counter value', ()=>{
    const newState = counterReducer(initialState, {type:"INC-VALUE"})
    expect(newState.value).toBe(11)
    expect(newState.startTitle).toBe(2)
    expect(newState.maxTitle).toBe(3)
})