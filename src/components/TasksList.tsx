import { ITask, ITasksList } from "../interfaces"
import TaskItem from "./TaskItem"
const TasksList = ({ tasks, handleTaskRemove, handleToggleTask } : ITasksList ) => {
  return (

<div className="px-4">

    {
        tasks ?  tasks.map((task: ITask) => {
              return <TaskItem key={task.id} task={task}
                               handleTaskRemove={() => handleTaskRemove(task.id)}
                               handleToggleTask={() => handleToggleTask(task.id)}/>
        })
          : <p className="text-gary-300">No tasks add yet</p>
    }

</div>
  )
}
export default TasksList