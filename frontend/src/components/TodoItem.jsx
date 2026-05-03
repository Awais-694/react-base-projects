


const TodoItem = ({todo, deleteTodo})=>{
    return (
        <div style={{border: "1px solid #ddd", padding: "10px", margin: "10px 0", display:"flex", justifyContent: "space-between", alignItems: "center", borderRadius:"8px" }}>

            <span>{todo.task}</span>

            <button onClick={()=> deleteTodo(todo._id)} style={{ background: "#ff4d4d", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px", cursor: "pointer"}}>
                Delete
            </button>


        </div>
    )
}

export default TodoItem;