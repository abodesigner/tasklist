import { ITask, ITasksList } from "../interfaces"
import TaskItem from "./TaskItem"
const TasksList = ({ tasks, handleTaskRemove, handleToggleTask } : ITasksList ) => {
  return (

<div className="px-4">
    {
            tasks.map((task: ITask) => {
              return <TaskItem
                          key={task.id}
                          task={task}
                          handleTaskRemove={() => handleTaskRemove(task.id)}
                          handleToggleTask={() => handleToggleTask(task.id)}/>
        })
    }
</div>
  )
}
export default TasksList