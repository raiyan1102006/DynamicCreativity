import React, { Component } from 'react';

import {
  Button,
  Header,
  Modal,
  Container,
  Segment,
  Icon,
  Form,
  Message,
  Card,
  List
} from 'semantic-ui-react';

class AllUsersScreen extends Component {

  render() {

    let timeSegmentStyles = {
      height: "10em"
    };

    let timeStyles = {
      paddingTop: "2em",
      fontSize: "3em",
      color: "#00B5AD"
    };

    return (

      <Segment vertical>
        <Container textAlign='center' style={timeSegmentStyles}>
          <Header style={timeStyles}>All Users</Header>
        </Container>
      </Segment>
    );
  }
}

export default AllUsersScreen;
