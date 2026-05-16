import { useState, useContext, useRef } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

const AddItem = () => {
    const [name, setName] = useState("");
    const {addItem} = useContext(ShoppingContext);
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trim() === "") return;
        addItem(name);
        setName("");
        inputRef.current.focus();

    };


    return(
        <>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input 
        ref={inputRef}
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Add an item (e.g. Milk)"
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ marginLeft: '10px', padding: '8px 16px' }}>
        Add Item
      </button>
    </form>
        </>
    )
}

export default AddItem;