import { ITask } from "../interfaces";
import TaskHeader from "./TaskHeader";
import TaskInputForm from "./TaskInputForm"
import TasksList from "./TasksList"
import { useState, useEffect } from "react";

const TasksLogic = () => {

    // Load tasks from LocalStorage
    const loadSavedTasks = () => {
        const data = localStorage.getItem('tasks');
        const json = JSON.parse(data || '""')
        if (json) {
            return json
        }
        return [];
    }

    const [tasksList, setTasksList] = useState<ITask[]>(() => loadSavedTasks());

    const completedTasks = tasksList.filter((task) => task.isDone === true).length;

    const addTask = (text: string) => {
        const newTask: ITask = {
            id: Date.now(),
            text,
            isDone: false,
        };
        setTasksList([...tasksList, newTask]);


    };

    const toggleTask = (id: number) => {
        const completetedTasks = tasksList.map(task => {
            if (task.id === id) {
                return { ...task, isDone: !task.isDone }
            }
            return task;
        })
        setTasksList(completetedTasks);
    }

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
        <>
            <TaskHeader tasks={tasksList} tasksCompleted={completedTasks} />
            <TaskInputForm handleAddTask={addTask} />
            <TasksList
                tasks={tasksList}
                handleTaskRemove={handleDeleteTask}
                handleToggleTask={toggleTask}
            />
        </>
    )
}
export default TasksLogic