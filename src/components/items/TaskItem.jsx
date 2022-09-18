import React from "react";


const TaskItem = ({data,deleteHandler,doneHandler}) =>{
    return(
        <div className={`task-item ${data.done && "done-task"}`}>
            <div>{data.text}</div>
            <div>{data.user.name}</div>
            <div>
                <span className={`delete-btn`} onClick={deleteHandler}>X delete</span>
                <span className={`done-btn`}><input type="checkbox" checked={data.done} onChange={doneHandler}/> Done</span>
            </div>
        </div>
    )
}
export default TaskItem