import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Axios import karna zaroori hai API call ke liye

const TodoForm = ({ addTodo }) => {
    const [task, setTask] = useState("");
    const [isSuggesting, setIsSuggesting] = useState(false);
    const navigate = useNavigate();

    // AI Suggestion mangwane ka function
    const suggestTask = async () => {
        try {
            setIsSuggesting(true);
            const res = await axios.get('http://localhost:5000/api/todos/suggest');
            const suggestion = res.data?.suggestion?.trim().replace(/^["']|["']$/g, "");

            if (!suggestion) {
                return alert("AI suggestion empty aayi hai");
            }

            setTask(suggestion); // AI ka response input field mein set ho jaye ga
        } catch (err) {
            console.error("AI Error:", err);
            alert("AI suggestion failed!");
        } finally {
            setIsSuggesting(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) {
            return alert("Task cannot be empty");
        }

        addTodo(task);
        setTask("");
        navigate("/");
    }; // Function yahan sahi se khatam ho raha hai

    return (
        <div style={{ padding: "20px" }}>
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter task name..."
                    style={{ padding: "10px", width: "250px", borderRadius: "4px", border: "1px solid #ccc" }}
                />

                {/* AI Suggestion Button */}
                <button
                    type="button" // Type "button" rakhna zaroori hai taake form submit na ho jaye
                    onClick={suggestTask}
                    disabled={isSuggesting}
                    style={{ padding: "10px", marginLeft: "10px", background: "#6f42c1", color: "white", border: "none", borderRadius: "4px", cursor: isSuggesting ? "not-allowed" : "pointer", opacity: isSuggesting ? 0.7 : 1 }}
                >
                    {isSuggesting ? "Suggesting..." : "AI Suggest"}
                </button>

                <button 
                    type="submit" 
                    style={{ padding: "10px 20px", marginLeft: "10px", background: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                >
                    Save Task
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
