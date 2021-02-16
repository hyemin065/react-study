import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo, delTodo} from '../redux/todo';

function Todo(){
    const [text, setText] = useState("");

    function getText(e){
        const {value} =e.target;
        setText(value);
    }

    const todos = useSelector(state=> state);
    const dispatch = useDispatch();
    const addTodos = (e) =>{
        e.preventDefault();
        dispatch(addTodo(text));
        setText("")
    }
    const delTodos = (id) =>{
        dispatch(delTodo(id));
    }


    return(
        <>
            <form onSubmit={addTodos}>
                <input type="text" onChange={getText} value={text}/>
                <button type="submit">제출</button>
            </form>
            <ul>
                {
                    todos ? todos.map(todo =>  {
                       return (<li id={todo.id} key={todo.id}>{todo.text}<button onClick={()=>delTodos(todo.id)}>x</button></li> )
                    }) : null
                }

            </ul>
        </>
    );

}

export default Todo;