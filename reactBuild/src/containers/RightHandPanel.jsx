import React, {Component} from 'react';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {Button, Header, Modal, Container, Icon} from 'semantic-ui-react';

import WelcomeScreen from '../components/WelcomeScreen.jsx';
import TaskScreen from '../components/TaskScreen.jsx';
import TaskTimerScreen from '../components/TaskTimerScreen.jsx';
import NetworkTimerScreen from '../components/NetworkTimerScreen.jsx';
import UsersTimerScreen from '../components/UsersTimerScreen.jsx';
import BlankTimerScreen from '../components/BlankTimerScreen.jsx';
import UsersScreen from '../components/UsersScreen.jsx';
import NetworkPanel from './NetworkPanel.jsx';

class RightHandPanel extends Component {

  //state = { showTask: false, show: false }

  constructor(props) {
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
    let isNetworkActive = this.props.showNetwork;
    let isUsersActive = this.props.showUsers;
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

    if (!isTaskActive && !isNetworkActive && !isUsersActive) {
      return (
      <div>
        <BlankTimerScreen/>
        <WelcomeScreen/>

      </div>
      );

    }else if (isTaskActive && !isNetworkActive && !isUsersActive){
      return (
        <div>
          <TaskTimerScreen/>
          <TaskScreen/>

        </div>
      );

    }else if (!isTaskActive && isNetworkActive && !isUsersActive){
      return (
        <div>
          <NetworkTimerScreen/>
          <NetworkPanel/>

        </div>
      );
    }else if (!isTaskActive && !isNetworkActive && isUsersActive){
      return (
        <div>
          <UsersTimerScreen/>
          <UsersScreen/>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    showTask: state.showTask,
    showNetwork: state.showNetwork,
    showUsers: state.showUsers
  }
}

export default connect(mapStateToProps)(RightHandPanel);
