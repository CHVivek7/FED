import React, {useReducer} from 'react';
const initialState = 0;
const reduce = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function UseReducer(){
    const [count, dispatch] = useReducer(reduce, initialState);
    return(
        <div>
            <h1>count = {count}</h1>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <br/><button onClick={() => dispatch('decrement')}>Decrement</button>
            <br/><button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
}
export default UseReducer;