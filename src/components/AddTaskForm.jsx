import Field from "./Field.jsx"
import Button from "./Button.jsx"

const AddTaskForm = () => {
    return (
        <form className="todo__form">
            <Field 
                className="todo__field"
                id="new-task"
                label="New task title"
            />
            <Button type='submit'>Add</Button>
        </form>
        )
}

export default AddTaskForm