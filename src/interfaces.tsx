// Task object interface
export interface ITask {
    id: number,
    text: string,
    isDone: boolean
}

// TaskItem interface
export interface ITaskItem {
    // handleTaskUpdate: (updateText: string, id: number) => void;
    handleTaskRemove: (id: number) => void;
    handleToggleTask: (id: number) => void;
    task: ITask;
}

// TaskInputForm interface
export interface ITaskHeader {
    tasks: ITask[];
    tasksCompleted: number
}
// TaskInputForm interface
export interface ITaskInputForm {
    handleAddTask: (text: string) => void;
}

// TasksList interface
export interface ITasksList {
    // handleTaskUpdate: (updateText: string, id: number) => void;
    handleTaskRemove: (id: number) => void;
    handleToggleTask: (id: number) => void;
    tasks: ITask[];
}

// Task form interface
export interface ITaskForm {
    tasks: ITask[];
    handleCreateTask: (task: ITask) => void;
}

export interface Props {
    task: ITask
}

export interface propTypes {
    open: boolean,
    onClose: () => void,
    children: React.ReactNode
}