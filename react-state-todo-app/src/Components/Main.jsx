import AddTaskForm from "./AddTaskForm"
import PriorityFilter from "./PriorityFilter"
import TaskList from "./TaskList"

export default function Main(){
    return(
        <main>
            <AddTaskForm />
            <PriorityFilter />
            <TaskList />

            
        </main>
    )
}