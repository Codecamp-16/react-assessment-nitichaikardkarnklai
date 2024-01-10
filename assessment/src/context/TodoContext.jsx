import React, { createContext, useContext, useState } from 'react'

const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
    const [newTodo, setNewTodo] = useState({});
    return (
        <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>
    )
}

export const useTodo = () => {
    return useContext(TodoContext);
}