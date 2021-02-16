import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {plus, minus} from '../redux/counter';


function Count(){
    const count = useSelector(state => state.count);
    
    const dispatch = useDispatch();
    const up = () => dispatch(plus());
    const down = () => dispatch(minus());

    return(
        <>
            <div>{count}</div>
            <button onClick={up}>+</button>
            <button onClick={down}>-</button>
        </>
    );
}

export default Count;