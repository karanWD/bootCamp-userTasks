import React from "react";
import "./users.css"
import Heading from "../ui/Heading";
import AddUser from "../addUser/AddUser";
import UserList from "../userList/UserList";

const Users = ({users, setUsers, deleteUser}) => {

    return (
        <div className={`users-container`}>
            <Heading text={"Users"} variant={"h1"}/>
            <hr/>
            <AddUser clickHandler={(value) => setUsers({id: users.length + 1, name: value})}/>
            <Heading text={"List of users"} variant={"h4"}/>
            <UserList deleteHandler={(id)=>deleteUser(id)} users={users} />
        </div>
    )
}

export default Users