import React, { Component } from 'react';
import { connect } from 'react-redux';

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

class UsersScreen extends Component {

  render() {
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

      </div>
    );

  }
}

export default UsersScreen;
