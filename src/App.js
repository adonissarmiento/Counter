import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Counters from './components/counters';
import { sumBy } from 'lodash';

class App extends Component {
  state = { 
    counters: [
        {
            id: 1, value: 0 ,
        },
        {
            id: 2, value: 0,
        }
    ]
 };

constructor() {
  super();
  console.log('App - Construtor');
  //this.state = 
}

componentDidMount() {
  // Ajax Call
  console.log('App - Mounted');
}

addCounter () {
  const {counters} = this.state;

    let id = counters.length == 0 ? 1 : counters[counters.length-1].id + 1;
    counters.push({
      id,
      value:0
    })
    this.setState({counters})
  
}


handleReset = () => {
    const counters = this.state.counters.map(c => { c.value = 0;
    return c;
    });
    this.setState({ counters});
};

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters }); 

};

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters }); 
};

handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({ counters });

};

  render()  {
    console.log('App - Rendered')
    const { counters } = this.state;
    const total = sumBy(counters.filter(e=>e.value>0), 'value');
    console.log("total",total)
      return (
        <React.Fragment>
          <Navbar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalItems={total}
          />
          <main className='container'>
            <Counters 
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
              onDecrement={this.handleDecrement}
              addCounter={this.addCounter.bind(this)}
              />
          </main>
        </React.Fragment>
      );
    }
  }

export default App;