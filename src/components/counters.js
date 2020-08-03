import React, { Component } from 'react';
import Counter from './counter'
import { countBy } from 'lodash';

class Counters extends Component {

 
    render() { 
        console.log(this.props.counters)
    const { onReset, onDelete, onIncrement, counters, onDecrement,addCounter} = this.props;
    const l = this.props.counters.length;
        return ( 
        <div>
            <button onClick={onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
            <button onClick={addCounter} className='btn btn-orange btn-sm m-2'>Add Counter</button>
            { counters.map(counter => 
            <Counter e
                key={counter.id} 
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement} 
                counter={counter}
                totalLength={l}
                />
            
                )}

        </div> );
    }
}
 
export default Counters;