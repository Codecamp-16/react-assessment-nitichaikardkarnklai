import React, { createContext, useContext, useState } from 'react'

const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
    const [newTodo, setNewTodo] = useState(""); // {todo: xxx, id: xxx}
    const [todoList, setTodoList] = useState([{todo: "test", status: false, id: "asdf"}]);
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