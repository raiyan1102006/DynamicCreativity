import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Button, Header, Modal, Container, Icon, Segment, Grid} from 'semantic-ui-react';

import RightHandPanel from './RightHandPanel.jsx';
import LeftHandPanel from './LeftHandPanel.jsx';
import StepNavigation from '../components/StepNavigation.jsx';

class HomePage extends Component {

  state = { showTask: false, show: false }

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
        <div>

          <Segment attached vertical style={mainSegmentStyles}>
            <Grid stackable style={mainSegmentStyles}>
              <Grid.Column width={4} color='teal'>
                <LeftHandPanel/>
              </Grid.Column>

              <Grid.Column width={11}>
                {<RightHandPanel/>}
              </Grid.Column>
            </Grid>
          </Segment>

          <StepNavigation/>

        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    showTask: state.showTask
  }
}

export default connect(mapStateToProps)(HomePage);
