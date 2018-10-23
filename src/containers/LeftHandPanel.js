import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Button, Header, Modal, Container, Icon} from 'semantic-ui-react';

import TaskList from '../components/TaskList';

class LeftHandPanel extends Component {

  state = { showTask: false, show: false }

  constructor(props: Object) {
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

    let isTaskActive = this.state.show;

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
            <TaskList/>
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

export default connect(mapStateToProps)(LeftHandPanel);
