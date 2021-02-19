import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {plusSaga, minusSaga} from './redux/counter2';


function Counter(){
    const state = useSelector(state=> state);
    const dispatch = useDispatch();

    const plusBtn = () => {
        dispatch(plusSaga());

    }

    const minusBtn = () => {
        dispatch(minusSaga());

    }
    return(
        <>
            <div>{state}</div>
            <button onClick={plusBtn}>plus</button>
            <button onClick={minusBtn}>minus</button>
        </>
    )

}

export default Counter;