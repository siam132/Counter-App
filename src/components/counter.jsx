import React, { Component } from "react";

class Counter extends Component {
 

  render() {
    return (
      <div>
        <h4>Counter No.{this.props.counters.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={()=> this.props.onIncrement(this.props.counters)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counters.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counters.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counters;
    const x = "Zero";
    return value === 0 ? x : value;
  }
}

export default Counter;
