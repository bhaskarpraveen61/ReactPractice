import { decrement, increment } from "./Actions";

const initialState =0 ;

function reducer (state = initialState,action){
    const {type,payload} = action;

    switch (type) {
        case increment:
            return state+1;
        case decrement:
            return state -1;
        default:
            return state;
    }
} 

export default reducer();