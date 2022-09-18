import React from "react";
import "./tasks.css"
import Heading from "../ui/Heading";
import AddTask from "../addTask/AddTask";
import FilterTasks from "../filterTask/FilterTasks";
import Table from "../ui/Table";
import TaskItem from "../items/TaskItem";

const titles = ["Task", "Username", "Actions"]

const Tasks = ({users, tasks, setTask, deleteTask, doneTask, setFilter, filterType, filteredTasks, setSearch}) => {

    const doneHandler = (id) => {
        const target = tasks.find(item => item.id === id)
        target.done = !target.done
        doneTask()
    }

    return (
        <div className={`tasks-container`}>
            <Heading variant={"h1"} text={"Tasks"}/>
            <hr/>
            <Heading variant={"h4"} text={"Add task"}/>
            <AddTask users={users} clickHandler={(values) => setTask({
                id: tasks.length + 1,
                text: values.text,
                user: values.user,
                done: false
            })}/>
            <Heading variant={"h4"} text={"List of tasks"}/>
            <FilterTasks filterType={filterType}
                         filterHandler={(type) => setFilter(type)}
                         searchHandler={(value) => setSearch(value)}/>
            <Table render={(item, index) =>
                    <TaskItem key={index} data={item} doneHandler={() => doneHandler(item.id)}
                          deleteHandler={() => deleteTask(item.id)}/>}
                   data={filteredTasks}
                   titles={titles}/>
        </div>
    )
}

export default Tasks