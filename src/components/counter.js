 import React, { Component } from 'react'; 

 class Counter extends Component {
    //  state = {
    //      value: this.props.counter.value
    //     //  tags: ['tag1', 'tag2', 'tag3']
    //  };

    // 


    //  styles = {
    //      fontSize: 15,
    //      fontWieght: 'bold'
    //  }

    //  renderTags () {
    //      if (this.state.tags.length === 0) return <p>No Tags</p>;
    //      return <ul>{this.state.tags.map(tag => <li key={tag}>{tag }</li>)}</ul>;
    //  }
     
     render() { 
         return (
        <React.Fragment>
            <p>
                {this.props.counter.id}
                <span className={this.getBadgeClasses()}>{ this.formatCounter() }</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </p>
            {/* {this.state.tags.length === 0 && 'Please Create a Tag!'}
            {this.renderTags()} */}
            {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag }</li>)}</ul> */}
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