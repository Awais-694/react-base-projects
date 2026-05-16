import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

const ListStats = () => {
    const { items } = useContext(ShoppingContext);
    const completedItems = items.filter(item => item.completed).length;
    const remainingItems = items.length - completedItems;


    return (
        <>
            <div className="list-container">

                <h3>List Stats</h3>
                <p>Total items: {items.length}</p>
                <p>Completed: {completedItems}</p>
                <p>Remaining: {remainingItems}</p>

            </div>
        </>
    )
}

export default ListStats;
