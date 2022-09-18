import React from "react";

const Table = ({titles, render, data}) => {
    return (
        <div className={`task-items-container`}>
            <div className={"titles-container"}>
                {titles.map((item, index) => <div className={"title-item"} key={index}>{item}</div>)}
            </div>
            {
                data.length > 0 ?
                data.map((item, index) => render(item, index))
                :
                <div className="empty-state">You have no data, Add your data </div>
            }
        </div>


    )
}
export default Table