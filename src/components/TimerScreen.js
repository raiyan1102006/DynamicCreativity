import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {Button, Header, Modal, Container, Icon} from 'semantic-ui-react';

import WelcomeScreen from './WelcomeScreen';
import TaskScreen from './TaskScreen';

class TimerScreen extends Component {

  constructor(props: Object) {
    super(props);
    // Bind all methods to 'this' context here
    (this: any).onHandleStartTimer = this.onHandleStartTimer.bind(this);
  }

  componentWillMount() {

  }

  componentWillUpdate(nextProps, nextState) {
    return true;
  }

  onHandleStartTimer(){

  }

  render() {

    let isTimerActive = this.props.showTask;

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

    if (!isTimerActive) {

      return (
        <div className="ui vertical segment">
          <Container textAlign='center' style={timeSegmentStyles}>
            <Header style={timeStyles}></Header>
          </Container>
        </div>
      );

    }else{

      return (
        <div className="ui vertical segment">
          <Container textAlign='center' style={timeSegmentStyles}>
            <Header style={timeStyles}>3:00</Header>
          </Container>
        </div>
      );
    }
  }
}

function mapStateToProps(state): Object {
  return {
    showTask: state.showTask
  }
}

export default connect(mapStateToProps)(TimerScreen);
