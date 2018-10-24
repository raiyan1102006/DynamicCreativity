import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Button, Header, Modal, Container, Icon} from 'semantic-ui-react';

import WelcomeScreen from '../components/WelcomeScreen';
import TaskScreen from '../components/TaskScreen';
import TimerScreen from '../components/TimerScreen';

class RightHandPanel extends Component {

  //state = { showTask: false, show: false }

  constructor(props: Object) {
    super(props);
    // Bind all methods to 'this' context here
  }

  componentWillMount() {

  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  render() {

    let isTaskActive = this.props.showTask;
    console.log(this.props);

    let mainSegmentStyles = {
      height: "100%",
      paddingBottom: "0em"
    };

    let welcomeStyles = {
      color: "#fff",
      paddingTop: "2em"
    };

    let bottomSegment = {
      marginTop: "0rem"
    };

    if (!isTaskActive) {
      return (
      <div>
        <TimerScreen/>
        <WelcomeScreen />
      </div>
      );

    }else{
      return (
        <div>
          <TimerScreen/>
          <TaskScreen/>
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

export default connect(mapStateToProps)(RightHandPanel);
