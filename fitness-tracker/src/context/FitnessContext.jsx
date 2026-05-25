import { createContext, useReducer } from 'react';
export const FitnessContext = createContext();


//..............................................
const fitnessReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_WORKOUT':
            return [
                ...state, {
                    id: Date.now(),
                    exercise: action.payload.exercise,
                    calories: Number(action.payload.calories),
                    completed: false
                }
            ];

        case 'DELETE_WORKOUT':
            return state.filter(item => item.id !== action.payload);


        case 'TOGGLE_WORKOUT':
            return state.map(item => item.id === action.payload ? { ...item, completed: !item.completed } : item);

        default:
            return state;
    };
}

//..............................................


export const FitnessProvider = ({ children }) => {
    const [workouts, dispatch] = useReducer(fitnessReducer, []);

    return (
        <FitnessContext.Provider value={{ workouts, dispatch }}>
            {children}
        </FitnessContext.Provider>
    )
}