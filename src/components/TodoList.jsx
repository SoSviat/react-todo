import TodoItem from "./TodoItem.jsx"

const TodoList = (props) => {
    const { 
        tasks = [], 
        } = props
    const hasTasks = true
    
    if (!hasTasks) {
        return <div className="todo__empty-message"></div>
    }
    return (
        <ul className="todo__list">
            {tasks.map(task =>
                (
                <TodoItem
                    className="todo-item"
                    id={task.id}
                    title={task.title}
                    isDone={task.isDone}
                    key={task.id}  
                />
                ))}
        </ul>
    )
}

export default TodoList