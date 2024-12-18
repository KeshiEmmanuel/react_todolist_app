import { FormEvent } from "react";
import { Todo } from "./TodoType";

export interface TodoCardProps {
    todo: Todo;
    handleDeleteTodo: (id: number) => void;
    editTodo: (e: FormEvent, id: number) => void;
    setEditedTask: React.Dispatch<React.SetStateAction<string>>;
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    editMode: boolean;
    handleCompletedTask: (id: number) => void;
}
