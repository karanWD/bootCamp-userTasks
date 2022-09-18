import React, {useContext, useEffect, useReducer} from "react";
import Users from "../users/users"
import Tasks from  "../tasks/Tasks"
import {AppReducer} from "../../reducers/app/appReducer";
import {deleteAction} from "../../reducers/app/appActions";
import {AlertContext} from "../../contexts/alertContext";

const TaskManager = () =>{
  const {showAlert}=useContext(AlertContext)
  const initial = {tasks: [], users: [], filteredTasks: [], filterSearch: "", filterType: "all"}
  const [state, dispatch] = useReducer(AppReducer, initial)

  useEffect(() => {
    dispatch({type: "filterList"})
  }, [state.tasks, state.filterType, state.filterSearch])

  const addHandler = (data) =>{
        if (data.name){
            dispatch({type: "addUser", payload: data})
            showAlert("success","user added successfully")
        }else {
            showAlert("error","user name is required")
        }
  }

  return (
     <>
          <Users users={state.users} setUsers={data => addHandler(data)}
                 deleteUser={id => dispatch({type: "deleteUser", payload: id})}/>
          <Tasks users={state.users}
                 tasks={state.tasks}
                 filterType={state.filterType}
                 filteredTasks={state.filteredTasks}
                 searchedTasks={state.searchedTasks}
                 deleteTask={id => dispatch(deleteAction(id))}
                 doneTask={() => dispatch({type: "doneTask"})}
                 setTask={data => dispatch({type: "addTask", payload: data})}
                 setFilter={(type) => dispatch({type: "setFilter", payload: type})}
                 setSearch={value => dispatch({type: "setSearch", payload: value})}/>
     </>
  );
}

export default TaskManager



