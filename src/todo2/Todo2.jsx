import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo, delTodo, modifyTodo, updateTodo, completeTodo} from '../redux/todoLast';
import styled from 'styled-components';

const Ul = styled.ul`
    li{
        &.completed{text-decoration:line-through;} 
    }
    
`;

function Todo2(){
    const [text, setText] = useState("");
    const [inputText, setInputText] = useState("");

    function getText(e){
        const {value, name} = e.target;
        if(name === "inputText"){
            setInputText(value);
        }else{
            setText(value);
        }
        
    } 

    const todos = useSelector(state =>state);

    const dispatch = useDispatch();

    const addTodoSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodo(text));
        setText("");
    } 

    const deleteTodo = (id) =>{
        dispatch(delTodo(id));
    }

    const modifyTodos = (id,text) =>{
        dispatch(modifyTodo(id,text));
        setInputText(text);
    }

    const updateTodos = (id) => {
        dispatch(updateTodo(id,inputText));   
    }
    
    const completeTodos = (id) => {
        dispatch(completeTodo(id));
    }

    
    return(
        <>
            <form onSubmit={addTodoSubmit}>
                <input type="text" name="initialText" value={text} onChange={getText}/>
                <button type="submit">제출</button>
            </form>
            <Ul>
                {
                    todos ? todos.map(todo =>{
                        if(todo.isModify){
                            return (<p key={todo.id}><input name="inputText" type="text" value={inputText} onChange={getText}/><button onClick={()=>updateTodos(todo.id,inputText)} >완료</button></p>)
                         }else{
                             return (<li id={todo.id} key={todo.id} className={todo.isCompleted ? "completed" : ""}>{todo.text}<button onClick={()=>{completeTodos(todo.id)}}>완료</button><button onClick={()=>{modifyTodos(todo.id,todo.text)}}>수정</button><button onClick={()=>{deleteTodo(todo.id)}}>삭제</button></li>)
                         }
                        
                    }) : null 
                }
            </Ul>
        </>
        
    );
}

export default Todo2;
