const ADD_TODO = "add_todo";
const DEL_TODO = "del_todo";
const DONE_TODO = "done_todo";
const MODIFY_TODO = "modify_todo";
const UPDATE_TODO = "update_todo";

export const addTodo = (text) => ({
    type:ADD_TODO,
    todos:{
        id: Math.floor(Math.random()*10000000),
        text,
        done: false,
        modify: false
    }
})

export const delTodo = (id) => ({
    type:DEL_TODO,
    id
})


export const doneTodo = id => ({
    type: DONE_TODO,
    id
})

export const modifyTodo = id =>({
    type: MODIFY_TODO,
    id
})

export const updateTodo = (id,text) =>({
    type:UPDATE_TODO,
    id,
    text
})

const todoState = [];



export default function todo(state = todoState, action){
    switch(action.type){
        case ADD_TODO:
            return [...state, action.todos];
        case DEL_TODO:
            return state.filter(todo => {
                return todo.id !== action.id               
            });
        case DONE_TODO:
            return state.map(todo => {
                if(todo.id === action.id){
                    todo.done = !todo.done;
                }
                return todo;
            })
            case MODIFY_TODO:
                return state.map(todo =>{
                    if(todo.id === action.id){
                        todo.modify = true;
                    }
                    return todo;
                })
            case UPDATE_TODO:
                return state.map(todo=>{
                    if(todo.id === action.id){
                        todo.modify = false;
                        todo.text = action.text
                    }
                    return todo;
                })
        default:
            return state;
    
    }
}