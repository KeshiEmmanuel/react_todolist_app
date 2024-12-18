import { useState, useEffect } from "react";
import { Todos } from "../types/TodoType";

function useTodo() {
    const [todos, setTodos] = useState<Todos>(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            return JSON.parse(storedTodos) || [];
        } else {
            return console.error("Failed to fetch todos from localStorage");
        }
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return { todos, setTodos };
}

export default useTodo;
