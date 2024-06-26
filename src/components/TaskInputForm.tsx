import { useState } from "react";
import { ITaskInputForm } from "../interfaces";
import { CiCirclePlus } from "react-icons/ci";

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

        if (taskInput.length < 4) {
            alert("Please enter minimum 5 chars");
            return;
        }
        handleAddTask(taskInput);
        setTaskInput("");
    };
    return (
        <div className="shadow-xl mb-4">

            <form className="px-2 flex items-center py-4 font-opensans" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="outline-none bg-transparent border border-gray-500 p-2 w-[500px] text-white  rounded
        placeholder:text-gray-300"

                    onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = "What would you like to do?"}
                    onChange={handleInputChange}
                    value={taskInput}
                />

                <button className="bg-gray-700 border-none p-2
                 text-white cursor-pointer rounded ml-2">
                    <CiCirclePlus size={30} />
                </button>
            </form>

        </div>
    );
};

export default TaskInputForm;
