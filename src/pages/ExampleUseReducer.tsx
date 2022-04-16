import React, { useReducer } from 'react'

interface IState {
    color: 'red' | 'buleviolet'
}

const initialState: IState = {
    color: 'red'
}

enum IActionTypes {
    COLOR_CHANGE
}

interface IAction {
    type: IActionTypes
    payload: any
}

const reducer = (state: IState, action: IAction) => {
    const { type, payload } = action
    switch (type) {
        case IActionTypes.COLOR_CHANGE:
            return { ...state, color: payload }
        default:
            return state
    }
}

const ExampleUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <span style={{ color: state.color }}>tadashi</span>
            <button onClick={() => {
                dispatch({
                    type: IActionTypes.COLOR_CHANGE,
                    payload: state.color === 'red' ? 'blueviolet' : 'red'
                })
            }}>
                change
            </button>
        </div>
    )
}

export default ExampleUseReducer