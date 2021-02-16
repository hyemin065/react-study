//action type
const PLUS = "PLUS";
const MINUS = "MINUS";


//action creator
export const plus = () => ({type:PLUS});
export const minus = () => ({type:MINUS});


//Initial state
const countState = {
    count : 0
}

//reducer
export default function Countsserz(state=countState, action){
    switch(action.type){
        case PLUS:
            return{
                ...state,
                count : state.count + 1
            }
        case MINUS:
            return{
                ...state,
                count : state.count - 1
            }
        default:
            return state;
    }
}