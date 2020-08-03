 import React, { Component } from 'react'; 
 import { get } from 'lodash';
 
 class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }
     
     render() {   
         console.log('length', this.props.totalLength);
         return(
        <React.Fragment>
            <p>
                {this.props.counter.id}
                <span className={this.getBadgeClasses()}>{ this.formatCounter() }</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-green btn-sm'>+</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value  === 0} className='btn btn-red btn-sm'>-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}  className='btn btn-black btn-sm m-2'>Delete</button>
            </p>
        </React.Fragment>
        ); 
     }

     getBadgeClasses() {
         let classes = 'badge m-2 badge-';
         classes += this.props.counter.value === 0 ? 'warning' : 'primary';
         return classes;
     }

    formatCounter () {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
  
 export default Counter;