import React from "react";
import UserItem from "../items/UserItem";

const UserList = ({users,deleteHandler}) => {
    return (
        users.length > 0 ?
            users.map(item => <UserItem key={item.id} deleteHandler={()=>deleteHandler(item.id)} data={item}/> )
            :
            <div className="empty-state">There is no user,Add your first user</div>
    )
}

export default UserList
