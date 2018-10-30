import React, { Component } from 'react';

import {Button, Header, Modal, Container, Icon, Segment, Grid, Step} from 'semantic-ui-react';

class StepNavigation extends Component {

  render() {
    return (
      <Step.Group
        size='mini'
        attached='top'>
        <Step active>
          <Icon name='clipboard' />
          <Step.Content>
            <Step.Title>Welcome</Step.Title>
          </Step.Content>
        </Step>

        <Step>
          <Icon name='list' />
          <Step.Content>
            <Step.Title>Task</Step.Title>
          </Step.Content>
        </Step>

        <Step >
          <Icon name='th list' />
          <Step.Content>
            <Step.Title>Network Task</Step.Title>
          </Step.Content>
        </Step>

        <Step >
          <Icon name='address book' />
          <Step.Content>
            <Step.Title>Connect</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    );
  }
}

export default StepNavigation;
