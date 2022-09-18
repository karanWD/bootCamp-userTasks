import React, {useState} from "react";
import Heading from "../ui/Heading";


const AddUser = ({clickHandler}) =>{
    const [value, setValue] = useState()
    return(
        <div>
            <Heading text={"Add users"} variant={"h4"} />
            <div className={`user-input-container`}>
                <input placeholder={"Write user name"} type="text" value={value}
                       onChange={e => setValue(e.target.value)}/>
                <button onClick={()=>clickHandler(value)}>Add</button>
            </div>
        </div>
    )
}

export default AddUser