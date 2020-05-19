import React, { Component } from "react";

class Counter extends Component {
  //This function will conditionally render elements within the render block
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no more tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //This is the render window for this component
  render() {
    return (
      <div>
        <h1>Testing git updates</h1>
        <span className={this.getBadgeClasses()}>{this.formatCount(0)}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/*{this.state.tags.length === 0 && "Please enter new tags"}*/}
        {/*{this.renderTags()}*/}
      </div>
    );
  }

  //Sets the badge view to change based on the value present
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  //Formats the the badge to show 'Zero' if no value is present, otherwise it displays the number
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
