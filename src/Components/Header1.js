import React from "react";
import { Button, Icon } from "semantic-ui-react";

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

  onKeyPress = e => {
    if (e.which === 13) {
      this.addTodo(this.state.todo);
    }
  };

  render() {
    return (
      <div className="ui action input">
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Enter Task..."
          onKeyPress={this.onKeyPress}
        />

        <Button
          animated
          className="ui positive button"
          onClick={() => this.addTodo(this.state.todo)}
          type="button"
        >
          <Button.Content visible>ADD</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </div>
    );
  }
}
