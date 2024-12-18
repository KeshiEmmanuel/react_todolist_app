import { FormEvent, useMemo, useState } from "react";
import TodoCard from "../components/TodoCard";
import TodoInput from "../components/TodoInput";
import useTodo from "../hooks/useTodo";

export default function App() {
    const { todos, setTodos } = useTodo();
    const [editedTask, setEditedTask] = useState<string>("");

    const [editMode, setEditMode] = useState<boolean>(false);

    console.log(todos);

    function handleDeleteTodo(id: number) {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }
    function editTask(e: FormEvent, id: number) {
        e.preventDefault();

        setTodos((prevTodo) =>
            prevTodo.map((todo) =>
                todo.id === id ? { ...todo, task: editedTask } : todo
            )
        );
        setEditMode((prev) => !prev);
    }
    function handleCompletedTask(id: number) {
        setTodos((prevTodo) =>
            prevTodo.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: true } : todo
            )
        );
    }
    return (
        <main className="bg-gray-900 w-full text-white">
            <div className="flex gap-2 mx-auto max-w-[500px] flex-col full-height items-center justify-center">
                {todos && (
                    <>
                        {todos.map((todo) => (
                            <TodoCard
                                key={todo.id}
                                todo={todo}
                                handleDeleteTodo={handleDeleteTodo}
                                editTodo={editTask}
                                handleCompletedTask={handleCompletedTask}
                                editMode={editMode}
                                setEditMode={setEditMode}
                                setEditedTask={setEditedTask}
                            />
                        ))}
                    </>
                )}
                <TodoInput setTodos={setTodos} />
            </div>
        </main>
    );
}
