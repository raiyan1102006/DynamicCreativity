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

    let teal = {
      backgroundColor: '#008080'
    };

    return (
      <div>
        <Card>
          <Card.Content className='teal'>
            <Card.Header textAlign='center'>Someone</Card.Header>
          </Card.Content>

          <Card.Content textAlign='center'>
            <List>
              <List.Item>List item </List.Item>
              <List.Item>List item </List.Item>
              <List.Item>List item </List.Item>
            </List>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header textAlign='center'>Someone</Card.Header>
          </Card.Content>
          <Card.Content textAlign='center'>
            <List>
              <List.Item>List item </List.Item>
              <List.Item>List item </List.Item>
              <List.Item>List item </List.Item>
            </List>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header textAlign='center'>Someone</Card.Header>
          </Card.Content>
          <Card.Content textAlign='center'>
            <List>
              <List.Item>List item </List.Item>
              <List.Item>List item </List.Item>
              <List.Item>List item </List.Item>
            </List>
          </Card.Content>
        </Card>

      </div>
    );
  }

}

export default NetworkScreen;
