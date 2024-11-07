import { createSlice ,nanoid } from "@reduxjs/toolkit";
import { act } from "react";


// how will the store look initaially

const initialState = {
    todos : [{
        id : 1,
        text : "hello world"
    }]
}

export const todoSlice = createSlice({
    name : 'todo' ,
    initialState,
    reducers:{
        addTodo : (state,action) => {
            const todo = {
                id :nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        } ,
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id!==action.payload)
        },
        updateTodo : (state,action) => {
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? action.payload : todo)
        },

        deleteTodo : (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id!==action.payload.id)
        }
    }
})

export const {addTodo,removeTodo,deleteTodo,updateTodo} = todoSlice.actions  //tihs is for components to use

export default todoSlice.reducer // this is for store to use