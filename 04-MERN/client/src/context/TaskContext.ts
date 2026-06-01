import { createContext, useReducer } from "react";

export const TaskContext = createContext({tasks: null});
 
export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASKS': 
            return {tasks: action.payload}
        case 'CREATE_TASK':
            return {tasks: [action.payload, ...state.tasks]}
        default: 
            return state;
    }
}
