import React, {useState} from 'react';
import NavBar from './components/NavBar';
import Counters from './components/Counters';

function App () {

    const [state, setState] = useState({
        counters: [
            { id: 1, value: 0},
            { id: 2, value: 1},
            { id: 3, value: 2},
            { id: 4, value: 3}
        ]
    });

    const onDelete = counterId => {
        const counters = state.counters.filter(counter => counter.id !== counterId);
        for(let i = 1; i <= counters.length; i++)
            counters[i - 1].id = i;
        setState({counters});
    };

    const handleReset = () => {
        const counters = state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        setState({counters});
    };

    const handleIncrement = (counter) => {
        const counters = [...state.counters];
        const idx = counters.indexOf(counter);
        counters[idx] = {...counter};
        counters[idx].value++;
        setState({counters});
    }

    const handleSingleReset = (counter) => {
        const counters = [...state.counters];
        const idx = counters.indexOf(counter);
        counters[idx] = {...counter};
        counters[idx].value = 0;
        setState({counters});
    }

    const handleAddingCounter = () => {
        const counters = [...state.counters];
        const id = counters.length + 1;
        counters.push({id: id, value: 0});
        setState({counters});
        console.log(counters);
    }

    return ( 
        <>
            <NavBar totalCounters={state.counters.filter(counter => counter.value > 0).length} />
            <main className="container">
                <Counters 
                    counters={state.counters}
                    onReset={handleReset}
                    onDelete={onDelete}
                    onIncrement={handleIncrement}
                    onSingleReset={handleSingleReset}
                    addCounter={handleAddingCounter}
                />
            </main>
        </>
     );
}

export default App ;