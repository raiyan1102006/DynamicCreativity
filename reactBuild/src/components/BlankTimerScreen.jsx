import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Button, Header, Modal, Container, Icon, Segment} from 'semantic-ui-react';

class BlankTimerScreen extends Component {

  constructor(props) {
    super(props);
    // Bind all methods to 'this' context here
  }

  componentWillMount() {

  }

  componentDidMount(){

  }

  componentWillUpdate(nextProps, nextState) {
    return true;
  }

  render() {

    let mainSegmentStyles = {
      height: "100%",
      paddingBottom: "0em"
    };

    let timeSegmentStyles = {
      height: "10em"
    };

    let timeStyles = {
      paddingTop: "2em"
    };

    let welcomeStyles = {
      color: "#fff",
      paddingTop: "2em"
    }

    let textStyles = {
      fontSize: "1.4em",
      lineHeight: "2em"
    };

    let modalStyles = {
      paddingRight: "2em"
    };


    return (
      <Segment vertical>
        <Container textAlign='center' style={timeSegmentStyles}>
          <Header style={timeStyles}></Header>
        </Container>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return {
    showTask: state.showTask
  }
}

export default connect(mapStateToProps)(BlankTimerScreen);
