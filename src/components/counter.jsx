import React from 'react';

const Counter = ({counter, onDelete, onIncrement, singleReset}) => {

    const {value, id} = counter;

    let classes = setBadgeClasses(); 

    return ( 
        <div>
            <h1 style={{fontSize: 15, minWidth: 100}} className={classes}>{(value === 0 && 'Zero') || value}</h1>
            <button className="m-2 btn btn-secondary" onClick={() => onIncrement(counter)}>Add</button>
            <button className="btn btn-secondary" onClick={() => singleReset(counter)}>Reset</button>
            <button className="btn btn-danger m-2" onClick={() => onDelete(id)}>Delete</button>
        </div>
     );

    function setBadgeClasses() {
        const base = "badge m-2 bg-";
        let classes = value === 0 ? base + 'warning' : base + 'primary';
        return classes;
    }
}
 
export default Counter;


