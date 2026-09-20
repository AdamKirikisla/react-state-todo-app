
export default function TaskList(props){
    
    const listTasks = props.tasks.map(
        task => (<li key={task.id}>
            <button>&#x2610;</button>
            {task.text} {task.priority}
            <button onClick={() => props.deleteTask(task.id)}>&#x2613;</button>
        
        </li>)
    )
    
    return(
        <section>
            <h2>Hello from task list</h2>
            <ul>
                {listTasks}

            </ul>
        </section>
    )
}