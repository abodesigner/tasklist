import { ITaskItem } from "../interfaces";
import { TiDelete } from "react-icons/ti";

const TaskItem = ({ task, handleTaskRemove, handleToggleTask }: ITaskItem) => {

    return (
        <>
            <div className="outline-none bg-transparent border border-gray-200 p-2 w-[600px] text-gray mb-4 rounded">
            <div className="flex justify-between items-center">

                <div className="flex justify-center items-center space-x-2">

                    <input

                        type="checkbox"
                        checked={task.isDone}
                        onChange={() => handleToggleTask(task.id)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />

                    <p className={`text-gray-700 ${task.isDone ? "line-through" : null}`}>{task.text.trim().toLowerCase()}</p>

                </div>

                <div className="flex items-center justify-center gap-x-2">

                    <button className="flex items-center justify-around p-2 text-red-500 rounded hover:bg-red-500 hover:text-white" onClick={() => handleTaskRemove(task.id)}>
                        <TiDelete />
                    </button>
                </div>
            </div>
        </div>

        </>
    );
};
export default TaskItem;
