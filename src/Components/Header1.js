import React from "react";

export default class Header1 extends React.Component {
  state = {
    todo: ""
  };

  addTodo = todo => {
    this.props.addTodo(todo);
  };

  handleChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  render() {
    return (
      <div className="ui action input">
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Enter Task..."
        />
        <button
          className="ui positive button"
          onClick={() => this.addTodo(this.state.todo)}
        >
          ADD
        </button>
      </div>
    );
  }
}
