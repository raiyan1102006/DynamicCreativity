import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Button, Header, Modal, Container, Segment, Icon, Grid } from 'semantic-ui-react';

import NetworkScreen from '../components/NetworkScreen.jsx';
import TaskScreen from '../components/TaskScreen.jsx';

class NetworkPanel extends Component {

  render() {
    return (
      <Segment vertical>
        <Grid
          container
          stackable
          columns='equal' >

        <Grid.Column>
          <NetworkScreen/>
        </Grid.Column>

        <Grid.Column>
          <TaskScreen/>
        </Grid.Column>

        </Grid>
      </Segment>
    );
  }

}

function mapStateToProps(state) {
  return {
    showTask: state.showTask,
    showNetwork: state.showNetwork
  }
}

export default connect(mapStateToProps)(NetworkPanel);
