//action type
const ADD_TODO = "add_todo";
const DEL_TODO = "del_todo";
const MODIFY_TODO = "modify_todo";
const UPDATE_TODO = "update_todo";
const COMPLETED_TODO = "completed_todo";

//action creator
export const addTodo = (text) => ({
    type:ADD_TODO,
    todos:{
        id:Math.floor(Math.random()*1000000),
        text,
        isModify:false,        
        isCompleted:false
    }
})

export const delTodo = (id) => ({
    type:DEL_TODO,
    id
})

export const modifyTodo = (id,text) => ({
    type:MODIFY_TODO,
    id,
    text 
})

export const updateTodo = (id,text) => ({
    type:UPDATE_TODO,
    id,
    text
})

export const completeTodo = (id) => ({
    type:COMPLETED_TODO,
    id
})


//initial state
const initialState = [];


//reducer
export default function todo(state=initialState, action){
    switch(action.type){
        case ADD_TODO:
            return [...state, action.todos];
        case DEL_TODO:
            return state.filter(todo => {
                return todo.id !== action.id
            })
        case MODIFY_TODO:
            return state.map(todo => {
                if(todo.id === action.id){
                    todo.isModify = true
                }
                return todo;
            })
        case UPDATE_TODO:
            return state.map(todo => {
                if(todo.id === action.id){
                    todo.isModify = false;
                    todo.text = action.text;
                }
                return todo;
            })
        case COMPLETED_TODO:
            return state.map(todo=>{
                if(todo.id === action.id){
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            })
            
            default:
                return state;
    }
}