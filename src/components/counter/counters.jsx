import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
  render() {
    const { counters, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div className="container">
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
