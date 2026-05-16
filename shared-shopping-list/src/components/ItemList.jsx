import {useContext} from 'react';
import { ShoppingContext } from '../context/ShoppingContext';

const ItemList = () =>{
    const {items, deleteItem, toggleItem} = useContext(ShoppingContext);


    return (
        <ul>
      {items.map(item => (
        <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
          <span onClick={() => toggleItem(item.id)}>
            {item.name}
          </span>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
    )
}

export default ItemList;
