import DeleteButton from "./DeleteButton"
import ToggleButton from "./ToggleButton"


export default function TaskList(props){
    
    const listTasks = props.tasks.map(
        task => (<li key={task.id} className={task.done ? "task-done" : "task"}>
            <ToggleButton checked={task.done} onClick={() => props.completeTask(task.id)} />
            {task.text} {task.priority}
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