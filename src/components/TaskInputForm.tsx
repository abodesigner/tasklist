import { useState } from "react";
import { ITaskInputForm } from "../interfaces";

const TaskInputForm = ({ handleAddTask }: ITaskInputForm) => {

    const [taskInput, setTaskInput] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskInput(e.target.value);
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        // check empty input
        if (taskInput.trim().length === 0) {
            alert("Please enter a value!");
            return;
        }
        handleAddTask(taskInput);
        setTaskInput("");
    };
    return (
        <div className="shadow-xl border mb-4">

            <form className="px-2 py-4 font-opensans" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="outline-none bg-transparent
        border border-gray-500 p-2 w-[500px] text-white mb-2 rounded
        placeholder:text-gray-300"

                    onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = "What would you like to do?"}
                    onChange={handleInputChange}
                    value={taskInput}
                />

                <button className="bg-gray-700 border-none p-2
                 text-white cursor-pointer rounded ml-2">
                    Add Task
                </button>
            </form>

        </div>
    );
};

export default TaskInputForm;
