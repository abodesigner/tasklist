import { ITaskHeader } from '../interfaces'
const TaskHeader = ({ tasks, tasksCompleted }: ITaskHeader) => {

    return (
        <div className="flex justify-between items-center rounded h-100px text-center font-bold p-6 bg-sky-600 text-white w-[600px]
                        mb-8 text-2xl">
            <h2>Tasks List</h2>

            <div className="flex justify-center items-center bg-white rounded-full text-black p-10 text-4xl text-center h-40 w-40">
                <div>{tasksCompleted}/{tasks.length}</div>
            </div>
        </div>
    )
}
export default TaskHeader