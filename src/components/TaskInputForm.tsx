import { useState, useEffect } from "react";
import { ITask } from "../interfaces";
import TasksList from "./TasksList";

const TaskInputForm = () => {

    // Load tasks from LocalStorage
    const loadSavedTasks = () => {
        const data = localStorage.getItem('tasks');
        const json = JSON.parse(data || '""')
        if (json) {
            return json
        }
        return [];
    }

    const [taskInput, setTaskInput] = useState<string>("");
    const [tasksList, setTasksList] = useState<ITask[]>(() => loadSavedTasks());

    const addTask = (text: string) => {
        const newTask: ITask = {
            id: Date.now(),
            text,
            isDone: false,
        };
        setTasksList([...tasksList, newTask]);
        setTaskInput("");
    };

    const toggleTask = (id: number) => {
        const tasks = tasksList.map(task=> {
            if (task.id === id) {
                return {...task, isDone: !task.isDone}
            }
            return task;
        })
        setTasksList(tasks);
    }

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
        addTask(taskInput);
    };

    const handleDeleteTask = (id: number): void => {
        const tasks = loadSavedTasks();
        const filteredTask = tasks.filter((task: ITask) => { return task.id !== id });
        setTasksList(filteredTask);
        localStorage.setItem("tasks", JSON.stringify(filteredTask));
    }

   // Update local storage whenever TODOs change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksList));
    }, [tasksList]);

    return (
        <div className="pm-8 shadow-xl border">
            <h1 className="text-center font-bold py-4 bg-sky-600 text-white w-[full] mb-8 text-2xl">
                Tasks List
            </h1>
            <form className="px-4 mb-4 font-opensans" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="outline-none bg-transparent
        border border-gray-500 p-2 w-[500px] text-gray mb-8 rounded
        placeholder:text-gray-300"
                    placeholder="What would you like to do?"
                    onChange={handleInputChange}
                    value={taskInput}
                />

                <button className="bg-gray-700 border-none p-2
                 text-white cursor-pointer rounded ml-2">
                    Add Task
                </button>
            </form>

            <TasksList
                tasks={tasksList}
                handleTaskRemove={handleDeleteTask}
                handleToggleTask={toggleTask}
                />
        </div>
    );
};

export default TaskInputForm;
