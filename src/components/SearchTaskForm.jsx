import Field from "./Field.jsx"

const SearchTaskForm = (props) => {
    
    const { 
        searchQuery,
        setSearchQuer,
    } = props
    
    return (
        <form 
            className="todo__form"
            onSubmit={(event) => event.preventDefault()}
            >
            <Field 
                className="todo__field"
                id="search-task"
                label="Search task"
                type="search"
                value={searchQuery}
                onInput={(event) => setSearchQuer(event.target.value)}
            />
        </form>
    )
} 

export default SearchTaskForm