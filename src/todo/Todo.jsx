import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo, delTodo, doneTodo, modifyTodo, updateTodo} from '../redux/todo';

function Todo(){
    const [text, setText] = useState("");
    const [inputText, setInputText] = useState("");

    function getText(e){
        if(e.target.name === "todo"){
            const {value} =e.target;
            setText(value);
        }else if(e.target.name === "edit"){
            const {value} = e.target;
            setInputText(value); 
        }
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
    const doneTodos = id => {
        dispatch(doneTodo(id));
    }
    const modifyTodos = (id,text) => {
        setInputText(text);
        dispatch(modifyTodo(id));
    }

    const updateTodos = (id) => {
        dispatch(updateTodo(id, inputText));
    }


    return(
        <>
            <form onSubmit={addTodos}>
                <input type="text" name="todo" onChange={getText} value={text}/>
                <button type="submit">제출</button>
            </form>
            <ul>
                {
                    todos ? todos.map(todo =>  {
                        if(todo.modify){
                            return (<span key={todo.id}><input type="text" name="edit" value={inputText} onChange={getText}/><button onClick={() => updateTodos(todo.id)}>완료</button></span>)
                        }else{
                            return (<li id={todo.id} key={todo.id}>{todo.text}<button onClick={()=>modifyTodos(todo.id,todo.text)}>수정</button><button onClick={()=>delTodos(todo.id)}>x</button><button onClick={() => doneTodos(todo.id)}>Done</button>{todo.done ? "done" : "false"}</li> )
                        }
                    }) : null
                }

            </ul>
        </>
    );

}

export default Todo;