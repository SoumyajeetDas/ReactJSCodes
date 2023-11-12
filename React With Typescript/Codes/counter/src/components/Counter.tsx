import React, { useReducer } from 'react';

type updateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type resetAction = {
    type: 'reset'
}


const initialState = { count: 0 }


type stateType = {
    count: number
}

type counterAction = updateAction | resetAction

const reducer = (state: stateType, action: counterAction): stateType => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }

        case 'decrement':
            return { count: state.count - action.payload }

        case 'reset':
            return initialState

        default:
            return state
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>
                <b>
                    Count is {state.count}
                </b>
            </div>



            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment by 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement by 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

        </>
    )
}

export default Counter
