import React from "react";
import Counter from "./counter";

const Counters = ({counters, onDelete, onIncrement, onReset, onSingleReset, addCounter}) => {
    return ( 
        <div className="mx-auto">       
            <button className="btn btn-primary btn-sm m-2" 
                onClick={onReset}>Reset All</button>   
            <button className="btn btn-secondary btn-sm m-2"
                onClick={addCounter}>Add a counter</button>
            {counters.map(counter =>
                <Counter 
                    key={counter.id} 
                    counter={counter} 
                    onDelete={onDelete} 
                    onIncrement={onIncrement} 
                    singleReset={onSingleReset} 
                />)}
        </div>
     );
}

export default Counters;