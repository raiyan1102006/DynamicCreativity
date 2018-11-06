import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Button, Header, Modal, Container, Icon} from 'semantic-ui-react';

import TaskListScreen from '../components/TaskListScreen.jsx';

class LeftHandPanel extends Component {

  constructor(props) {
    super(props);
    // Bind all methods to 'this' context here
    (this: any).onHandleShowTask = this.onHandleShowTask.bind(this);
  }

  componentWillMount() {

  }

  componentWillUpdate(nextProps, nextState) {
    return true;
  }

  onHandleShowTask(){
    this.setState({show: (!this.state.showTask)});
  }

  render() {

    let isTaskActive = this.props.showTask;
    let isNetworkActive = this.props.showNetwork;
    let isUserActive = this.props.showUsers;

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

    if (!isTaskActive && !isNetworkActive && !isUserActive) {
      return (
          <div className="ui vertical segment">
            <Container textAlign='center'>
              <Header style={welcomeStyles}>
                Welcome!
              </Header>
            </Container>
          </div>
        );

    }else{

      return (
        <div className="ui vertical segment">
          <Container textAlign='center'>
            <Header style={welcomeStyles}>
              Welcome!
            </Header>
            <TaskListScreen/>
          </Container>
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

export default connect(mapStateToProps)(LeftHandPanel);
