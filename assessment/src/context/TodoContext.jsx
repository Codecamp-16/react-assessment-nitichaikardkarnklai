import React, { createContext, useContext, useState } from 'react'
import { useLogin } from './LoginContext';


const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
    const {todoList, setTodoList} = useLogin();
    const [newTodo, setNewTodo] = useState(""); // {todo: xxx, id: xxx}
    const [addTask, setAddTask] = useState(false); 
    
    return (
        <TodoContext.Provider value={{
            todoList,setTodoList,
            addTask,setAddTask,
            newTodo, setNewTodo
            
        }}>{children}</TodoContext.Provider>
    )
}

export const useTodo = () => {
    return useContext(TodoContext);
}