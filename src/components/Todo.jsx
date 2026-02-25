import AddTaskForm from "./AddTaskForm.jsx"
import SearchTaskForm from "./SearchTaskForm.jsx"
import TodoInfo from "./TodoInfo.jsx"
import TodoList from "./TodoList.jsx"

const Todo = () => {
    const tasks = [
        {id: "task-1", title: 'Task 1', isDone: false},
        {id: "task-2", title: 'Task 2', isDone: true},
    ]
    
    const deleteAllTasks = () => {
        console.log('Delete all tasks')
    }
    
    const deleteTask = (id) => {
        console.log(`Delete task with id: ${id}`)
    }
    
    const toggleTaskComplete = (id, isDone) => {
        console.log(`Toggle task with id: ${id} to ${isDone}`)
    }
    
    const filterTasks = (query) => {
        console.log(`Filter tasks by query: ${query}`)
    }
    
    const addTask = (title) => {
        console.log(`Add task with title: ${title}`)
    }
    
    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm addTask={addTask}/>
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