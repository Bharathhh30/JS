import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id:1,
            todo :"Todo Message" ,
            completed : false,
        } 
    ] ,
    // theme : "dark"
    addTodo : (todo) => {},
    updateTodo : (todo,id) => {} ,
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})


// deni gurunchi context oh adi mention cheyali
export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider