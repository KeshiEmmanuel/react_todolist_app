import { FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MdCancel } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TodoCardProps } from "../types/TodoCardType";

export default function TodoCard({
    todo,
    handleDeleteTodo,
    editTodo,
    setEditedTask,
    setEditMode,
    handleCompletedTask,
    editMode,
}: TodoCardProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, ease: "linear" }}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 1,
                        delay: 0.5,
                    },
                }}
                className="flex justify-between w-full px-5 py-3 hover:bg-slate-700 transition-all bg-white/10 shadow-xl rounded-lg"
            >
                {editMode ? (
                    <form
                        className="w-full overflow-hidden"
                        onSubmit={(e) => editTodo(e, todo.id)}
                    >
                        <input
                            type="text"
                            onChange={(e) => setEditedTask(e.target.value)}
                            className="bg-transparent outline-none border-none"
                        />
                    </form>
                ) : (
                    <p
                        className={`w-full ${
                            todo.isCompleted && "line-through transition-all"
                        }`}
                        onDoubleClick={() => setEditMode((prev) => !prev)}
                    >
                        {todo.task}
                    </p>
                )}
                <div className="flex gap-1">
                    <IoIosCheckmarkCircleOutline
                        onClick={() => handleCompletedTask(todo.id)}
                        fontSize={"20px"}
                    />
                    <MdCancel
                        fontSize={"20px"}
                        onClick={() => handleDeleteTodo(todo.id)}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
