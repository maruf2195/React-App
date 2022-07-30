import React, {Component} from 'react';

class CounterClass extends Component {
    state = { 
        counter: 0
    } 
      
     increment = () => {
         this.setState({
            counter : this.state.counter + 1
        })
    }
     decrement = () => {
        this.setState({
            counter : this.state.counter - 1
        })
    }

    render() { 
        return (
            <>
            <button className='counter-button' onClick={this.decrement}>
                -
            </button>
            <span className='counter'>
                {this.statecounter}
            </span>
            <button className='counter-button' onClick={this.increment}>
                +
            </button>
            </>
        );
    }
}
 
export default CounterClass;