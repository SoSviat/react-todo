import TodoItem from "./TodoItem.jsx"

const TodoList = (props) => {
    const { 
        tasks = [],
        onDeleteTaskButtonClick,
        onTaskCompleteChange,
        filteredTasks,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
        } = props
    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0
    
    if (!hasTasks) {
        return <div className="todo__empty-message"> There are no tasks yet</div>
    }
    
    if (hasTasks && isEmptyFilteredTasks) {
        return <div className="todo__empty-message"> There are no tasks matching your search</div>
    }
    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map(task =>
                (
                <TodoItem
                    className="todo-item"
                    id={task.id}
                    title={task.title}
                    isDone={task.isDone}
                    key={task.id}
                    ref={task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onTaskCompleteChange={onTaskCompleteChange}
                />
                ))}
        </ul>
    )
}

export default TodoList