import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {
  Button,
  Header,
  Modal,
  Container,
  Icon,
  Form,
  Message,
  Card,
  List
} from 'semantic-ui-react';

class NetworkScreen extends Component {

  render() {

    let cardGroupStyles = {
      paddingTop: "1.5em"
    };

    return (
      <Card.Group style={cardGroupStyles}>
        <Card fluid color='teal'>
          <Button disabled color='teal'>
            <Card.Content className='teal'>
              <Card.Header textAlign='center'>Someone</Card.Header>
            </Card.Content>
          </Button>

          <Card.Content textAlign='center'>
            <List>
              <List.Item>List item </List.Item>
              <List.Item>List item </List.Item>
              <List.Item>List item </List.Item>
            </List>
          </Card.Content>
        </Card>

        <Card fluid color='teal'>
          <Button disabled color='teal'>
            <Card.Content className='teal'>
              <Card.Header textAlign='center'>Someone</Card.Header>
            </Card.Content>
          </Button>

          <Card.Content textAlign='center'>
            <List>
              <List.Item>List item </List.Item>
              <List.Item>List item </List.Item>
              <List.Item>List item </List.Item>
            </List>
          </Card.Content>
        </Card>

        <Card fluid color='teal'>
          <Button disabled color='teal'>
            <Card.Content className='teal'>
              <Card.Header textAlign='center'>Someone</Card.Header>
            </Card.Content>
          </Button>

          <Card.Content textAlign='center'>
            <List>
              <List.Item>List item </List.Item>
              <List.Item>List item </List.Item>
              <List.Item>List item </List.Item>
            </List>
          </Card.Content>
        </Card>

      </Card.Group>
    );
  }
}

export default NetworkScreen;
