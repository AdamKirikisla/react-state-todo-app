import AddTaskForm from "./AddTaskForm"
import TaskList from "./TaskList"
import data from "../data.js"
import { useState } from "react"


export default function Main(){

    const [todoData, setTodoData] = useState(data)

    function addTask(formData){
        const text = formData.get('text').trim() //'text' is for the html input name
        const priority = formData.get('priority')

        if(!text) return

        const newTask ={
            id: Date.now(), // unique ID, think about it
            text,
            priority,
            done: false
        }
        setTodoData(prevTask => [...prevTask, newTask])
    }

    function deleteTask(id){
        setTodoData(prevTasks => prevTasks.filter(
            
            task => task.id !== id))
    }

    function completeTask(id){
        setTodoData(prevTask => prevTask.map(
            task => task.id === id ? {...task, done: !task.done} : task
        ))
    }

    return(
        <main>
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={todoData} completeTask={completeTask} deleteTask={deleteTask} />
            

            
        </main>
    )
}