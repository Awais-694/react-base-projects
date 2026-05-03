import {Link} from 'react-router-dom'


const Navbar = ()=>{
    return(
        <nav style={{padding: "1rem", background: "#222", color: "#fff", display: "flex", gap: "20px"}}>
            <Link to= "/"style={{color: "white", textDecoration: "none", fontWeight: "bold"}} >My Todos</Link>
            <Link to= "/add"style={{color: "white", textDecoration: "none", fontWeight: "bold"}} >Add New Task</Link>
            
        </nav>
    )
}


export default Navbar;