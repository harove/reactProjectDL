import React, { Component } from "react";
import {
  Card as CardRS,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Col,
  Button,
} from "reactstrap";
import { users } from "../../utils/mock-data";

export class ListCards extends Component {
  constructor() {
    super();
    this.state = {
      users: users,
      test: true
    };
  }

  handleOnClick = usrId => {
    return () => {
      this.setState(state => {
        state.users[usrId - 1].alive = !state.users[usrId - 1].alive;
        return state.users;
      });
    };
  };

  render() {
    return (
        <Col lg="3">
          {this.state.users.map(usr => (
            <CardRS
              body
              inverse
              color={usr.alive ? "success" : "danger"}
              key={usr.id}
            >
              <CardBody>
                <CardImg top src={usr.img} />
                <CardTitle>{usr.name}</CardTitle>
                <CardSubtitle>{usr.alive ? "alive" : "notAlive"}</CardSubtitle>
                <Button onClick={this.handleOnClick(usr.id)}>
                  {usr.alive ? "kill" : "revive"}
                </Button>
              </CardBody>
            </CardRS>
          ))}
        </Col>
    );
  }
}


