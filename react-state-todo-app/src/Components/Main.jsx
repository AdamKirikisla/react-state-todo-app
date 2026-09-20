import AddTaskForm from "./AddTaskForm"
import PriorityFilter from "./PriorityFilter"
import TaskList from "./TaskList"
import data from "../data.js"
import { useState } from "react"


export default function Main(){

    const [todoData, setTodoData] = useState(data)

    return(
        <main>
            <AddTaskForm />
            <PriorityFilter />
            <TaskList tasks={todoData} />
            

            
        </main>
    )
}