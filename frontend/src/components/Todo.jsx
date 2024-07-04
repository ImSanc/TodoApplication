export function Todos({todos}) {

    return <div>
        { todos.map( (todo)=> {
            return <div>
                <h1>{todo.title}</h1>
                <h3>{todo.description}</h3>
                <button> {todo.completed ? 'done' : 'Mark as done'}</button>
                </div>
    }) }
    </div>
}