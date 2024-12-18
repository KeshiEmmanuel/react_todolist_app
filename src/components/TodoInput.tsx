import { FormEvent, useRef } from "react";
import { LuListTodo } from "react-icons/lu";
import { Todo, Todos } from "../types/TodoType";

interface Props {
    setTodos: React.Dispatch<React.SetStateAction<Todos>>;
}

function TodoInput({ setTodos }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!inputRef.current) return null;
        const newTodo: Todo = {
            id: new Date().getTime(),
            task: inputRef.current.value,
            isCompleted: false,
        };
        setTodos((prevTodo) => [...prevTodo, newTodo]);
        inputRef.current.value = "";
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="w-full shadow-xl">
            <label className=" py-2 px-4 flex gap-1 rounded-lg backdrop-blur-xl border-gray-500 border-2 items-center">
                <LuListTodo color="white" />
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Cooking..."
                    className="bg-transparent w-full outline-none border-none text-gray-200"
                />
            </label>
        </form>
    );
}

export default TodoInput;
