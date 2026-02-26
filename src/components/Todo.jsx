import {useState} from "react"
import AddTaskForm from "./AddTaskForm.jsx"
import SearchTaskForm from "./SearchTaskForm.jsx"
import TodoInfo from "./TodoInfo.jsx"
import TodoList from "./TodoList.jsx"

const Todo = () => {

    const [tasks, setTasks] = useState([
        {id: "task-1", title: 'Task 1', isDone: false},
        {id: "task-2", title: 'Task 2', isDone: true},
    ])
    
    const [newTaskTitle, setNewTaskTitle] = useState('')
    
    const deleteAllTasks = () => {
        const isConfirmed = window.confirm('Are you sure you want to delete all tasks?')
        
        if(isConfirmed) {
            setTasks([])
        }
    }
    
    const deleteTask = (id) => {
        setTasks(
            tasks.filter(task => task.id !== id)
        )
    }
    
    const toggleTaskComplete = (id, isDone) => {
        setTasks(
            tasks.map(task => {
            if(task.id === id) {
                return {...task, isDone}
            }
             
            return task
            })
        )
    }
    
    const filterTasks = (query) => {
        console.log(`Filter tasks by query: ${query}`)
    }
    
    const addTask = (title) => {
        if(newTaskTitle.trim().length > 0) {
            const newTask = {
            id: crypto?.randomUUID() ?? Date.now().toString(), 
            title: newTaskTitle,
            isDone: false
            }
            
            setTasks([...tasks, newTask])
            setNewTaskTitle('')
        }
    }
    
    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm 
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
                />
            <SearchTaskForm onSearchInput={filterTasks}/>
            <TodoInfo 
                total={tasks.length}
                done={tasks.filter(task => task.isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList 
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo