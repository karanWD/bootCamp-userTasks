import React from "react";
import {appActionTypes} from "./appActionTypes";


export const AppReducer =  (state, action) => {
    switch (action.type) {
        case "addUser":
            return {...state, users: [...state.users, action.payload]};
        case "deleteUser":
            return {...state, users: state.users.filter(item => item.id !== action.payload)}
        case "addTask":
            if (!action.payload.text || !action.payload.user) return state
            return {...state, tasks: [...state.tasks, action.payload]}
        case appActionTypes.DELETE_TYPE:
            return {...state, tasks: state.tasks.filter(item => item.id !== action.payload)}
        case "doneTask":
            return {...state}
        case "setFilter":
            return {...state, filterType: action.payload}
        case "filterList":
            if (state.filterType === "done") {
                return {
                    ...state,
                    filteredTasks: state.tasks.filter(item => item.done === true && item.user.name.includes(state.filterSearch))
                }
            } else if (state.filterType === "inprogress") {
                return {
                    ...state,
                    filteredTasks: state.tasks.filter(item => item.done === false && item.user.name.includes(state.filterSearch))
                }
            } else {
                return {
                    ...state,
                    filteredTasks: state.tasks.filter(item => item.user.name.includes(state.filterSearch))
                }
            }
        case "setSearch":
            return {...state, filterSearch: action.payload}
        default:
            return state
    }
}