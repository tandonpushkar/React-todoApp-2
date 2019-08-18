import React from "react";
import Header1 from "./Components/Header1";
import { Container, Divider } from "semantic-ui-react";
import { Header, Segment } from "semantic-ui-react";
import { Button, Card } from "semantic-ui-react";
import SimpleStorage from "react-simple-storage";
import Particles from "react-particles-js";

export default class App extends React.Component {
  state = {
    todos: [
      {
        id: 0,
        todo: "Manage operations"
      },
      {
        id: 1,
        todo: "Study"
      },
      {
        id: 2,
        todo: "Making Projects"
      },
      {
        id: 3,
        todo: "Making Projects"
      },
      {
        id: 4,
        todo: "Making Projects"
      },
      {
        id: 5,
        todo: "Making Projects"
      },
      {
        id: 6,
        todo: "Making Projects"
      }
    ],

    nextInt: 7
  };

  getCurrentDate(separator = "-") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  addTodo = todoText => {
    var todos = this.state.todos.slice();
    todos.push({
      id: this.state.nextInt,
      todo: todoText
    });
    this.setState({
      todos: todos,
      nextInt: this.state.nextInt + 1
    });
  };

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  };

  render() {
    return (
      <div>
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              }
            }
          }}
        />

        <div className="todo-wrapper">
          <SimpleStorage parent={this} />
          <Segment inverted>
            <Header as="h1" inverted color="teal" textAlign="center">
              React Todo Application
            </Header>
          </Segment>

          <Container textAlign="center">
            <Header1 addTodo={this.addTodo} />
          </Container>

          <Divider />

          <Card.Group centered>
            {this.state.todos.map(t => {
              return (
                <Card key={t.id}>
                  <Card.Content>
                    <Card.Header>
                      {t.todo
                        .split(" ")
                        .slice(0, 2)
                        .join("-")}
                    </Card.Header>
                    <Card.Meta>{this.getCurrentDate()}</Card.Meta>
                    <Card.Description>
                      <strong>{t.todo}</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui one buttons">
                      <Button
                        basic
                        color="red"
                        onClick={() => this.removeTodo(t.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </div>
      </div>
    );
  }
}
