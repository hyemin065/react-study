const ADD_TODO = "add_todo";
const DEL_TODO = "del_todo";

export const addTodo = (text) => ({
    type:ADD_TODO,
    todos:{
        id: Math.floor(Math.random()*10000000),
        text
    }
})

export const delTodo = (id) => ({
    type:DEL_TODO,
    id
    
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
        default:
            return state;
    
    }
}