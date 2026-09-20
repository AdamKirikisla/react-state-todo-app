import DeleteButton from "./DeleteButton"


export default function TaskList(props){
    
    const listTasks = props.tasks.map(
        task => (<li key={task.id} className={task.done ? "task-done" : "task"}>
            <button className="finish-button" onClick={() => props.completeTask(task.id)}>&#x2610;</button>
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