import DeleteButton from "./DeleteButton"
import ToggleButton from "./ToggleButton"


export default function TaskList(props){
    
    const listTasks = props.tasks.map(
        task => (<li key={task.id} className={task.done ? "task task-done" : "task"}>
            <ToggleButton checked={task.done} onClick={() => props.completeTask(task.id)} />
            <span className="task-text">{task.text}</span>
            <span className={`task-priority priority-${task.priority}`}>{task.priority}</span>
            <DeleteButton onClick={() => props.deleteTask(task.id)}/>
        </li>)
    )
    
    return(
        <section>
            <ul className="task-list">
                {listTasks}

            </ul>
        </section>
    )
}