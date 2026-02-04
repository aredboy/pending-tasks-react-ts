import { Task } from "./Task";

type TaskListProps = {
    taskList: string[];
    eraseTask: (index: number) => void;
}

export const TaskList = ({taskList, eraseTask}: TaskListProps) => {
  return (
    <div className="taskList">
        {taskList.map((task, index) => (
            <Task key={index} task={task} eraseTask={() => eraseTask(index)}></Task>
        )
    )}
    </div>
  )
}