import React from "react";


const UserItem = ({data,deleteHandler}) =>{
    return(
        <div className={`userItem`}>
            {data?.name}
            <span className={`delete-icon`} onClick={deleteHandler}>X</span>
        </div>
    )
}

export default UserItem