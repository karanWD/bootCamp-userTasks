import React, {useState} from "react";


const AddTask = ({clickHandler,users}) =>{
    const [values, setValues] = useState({text: "", user: ""})
    return(
        <div className={`add-task-container`}>
            <input type="text" value={values.text} placeholder={"Write task "}
                   onChange={e => setValues(prev => ({...prev, text: e.target.value}))}/>
            <select name="" id="" value={values.user.id}
                    onChange={e => setValues(prev => ({
                        ...prev,
                        user: users.find(item => item.id == e.target.value)
                    }))}>
                <option value="">choose user</option>
                {users.map(item => <option value={item?.id}>{item?.name}</option>)}
            </select>
            <button onClick={()=>clickHandler(values)}>Mention
            </button>
        </div>
    )
}

export default AddTask