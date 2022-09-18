import React from "react";

const filters = [
    "all",
    "inprogress",
    "done"
]

const FilterTasks = ({filterHandler, filterType, searchHandler}) => {
    return (
        <div className={`filters-container`}>
            <ul>
                {
                    filters.map((filterName, index) => {
                        return (
                            <li key={index} className={filterType === filterName ? "active-filter" : ""}
                                onClick={() => filterHandler(filterName) }>
                                {filterName}
                            </li>
                        )
                    })
                }
            </ul>

            <input className={"search-input"} type="text" placeholder={"Filter by username"}
                   onChange={e => searchHandler(e.target.value)}/>
        </div>
    )
}

export default FilterTasks