
export default function TaskList(props){
    
    const listTasks = props.tasks.map(
        task => (<li key={task.id}>{task.text} {task.priority}</li>)
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