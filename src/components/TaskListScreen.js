import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {Container, List, Icon} from 'semantic-ui-react';

class TaskListScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <List>
        <List.Item content='Task 1'/>
        <List.Item content='Task 2'/>
        <List.Item content='Task 3'/>
        <List.Item content='Task 4'/>
        <List.Item content='Task 5'/>
      </List>
    );
  }
}

export default TaskListScreen;
