type TaskProps = {
    task: string;
    eraseTask: () => void;
}

export const Task = ({task, eraseTask}: TaskProps) => {
  return (
    <div className='task'>
        <span>{task}</span>
        <button onClick={eraseTask}>Eliminar</button>
    </div>
  )
}