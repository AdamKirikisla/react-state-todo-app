import AddTaskForm from "./AddTaskForm"
import PriorityFilter from "./PriorityFilter"
import TaskList from "./TaskList"
import data from "../data.js"
import { useState } from "react"


export default function Main(){

    const [todoData, setTodoData] = useState(data)

    function addTask(formData){
        const text = formData.get('text').trim() //'text' is for the html input name
        priority = formData.get('priority')

        if(!text) return

        const newTask ={
            id: Date.now(), // unique ID, think about it
            text,
            priority,
            done: false
        }
        setTodoData(prevTask => [...prevTask, newTask])
    }

    return(
        <main>
            <AddTaskForm addTask={addTask} />
            <PriorityFilter />
            <TaskList tasks={todoData} />
            

            
        </main>
    )
}