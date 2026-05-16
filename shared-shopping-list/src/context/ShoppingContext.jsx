/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";

export const ShoppingContext = createContext();

const shoppingReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: Date.now(), name: action.payload, completed: false }];
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.payload);
    case 'TOGGLE_ITEM':
      return state.map(item => 
        item.id === action.payload ? { ...item, completed: !item.completed } : item
      );
    default:
      return state;
  }
};

export const ShoppingProvider = ({children})=>{
    const [items, dispatch] = useReducer(shoppingReducer, []);

    const addItem = (name) => {
      dispatch({ type: 'ADD_ITEM', payload: name });
    };

    const deleteItem = (id) => {
      dispatch({ type: 'DELETE_ITEM', payload: id });
    };

    const toggleItem = (id) => {
      dispatch({ type: 'TOGGLE_ITEM', payload: id });
    };

    return(
        <ShoppingContext.Provider value={{ items, addItem, deleteItem, toggleItem }}>
      {children}
    </ShoppingContext.Provider>
    )
}
