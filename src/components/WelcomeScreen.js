import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {Button, Header, Modal, Container, Icon} from 'semantic-ui-react';

class WelcomeScreen extends Component {

  state = { modalOpen: false }

  constructor(props: Object) {
    super(props);
    // Bind all methods to 'this' context here
    (this: any).onHandleOpen = this.onHandleOpen.bind(this);
    (this: any).onHandleClose = this.onHandleClose.bind(this);
    (this: any).onHandleShowTask = this.onHandleShowTask.bind(this);
  }

  componentWillMount() {

  }

  onHandleShowTask = () => {
    this.onHandleClose();
    const{dispatch} = this.props;
    dispatch({type: 'FETCH_SHOW_TASK', payload: false});
  }

  onHandleOpen = () => {
    this.setState({modalOpen: true})
  }

  onHandleClose = () => {
    this.setState({modalOpen: false});
  }

  render() {

    const time = "2:00";
    const intro = "Thank you for particpating in the Creativity Project!";
    const modalContent = "In this first section, you will be provided 4 minutes to list alternative uses for the prompt. Please note that vulgar answers can result in your expulsion from the study. You need to enter input to continue";
    const instructions = "This study consists of 5 Tasks";
    const tasks = "Each task will have three scetions";
    const taskOne = "You will be asked to come up with alternate uses of the given object";
    const taskTwo = "After you submit your list, we will show what others in your network submitted and you will get to edit your answers";
    const taskThree = "Then you will be able to view all members of your network and change who you follow, before the next task starts";

    const {onShowTask} = this.props;

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
      <div>
        <div className="ui vertical segment">
          <Container text>
            <div style={textStyles}>{intro}</div>
            <div style={textStyles}>{instructions}</div>
            <div style={textStyles}>{tasks}</div>
            <ol>
              <li style={textStyles}>{taskOne}</li>
              <li style={textStyles}>{taskTwo}</li>
              <li style={textStyles}>{taskThree}</li>
            </ol>
          </Container>
        </div>

        <div className="ui vertical segment">
          <Container textAlign='right' style={modalStyles}>
            <Modal
              trigger={
                <Button
                  color='teal'
                  onClick = {this.onHandleOpen}> Begin
                </Button>}
              open={this.state.modalOpen}
              onClose={this.onHandleClose}
              basic
              size='small'>

              <Header icon='browser' content='Ready?'/>

              <Modal.Content>
                <div>
                  {modalContent}
                </div>

                <div>
                  This is a timed section
                </div>
              </Modal.Content>

              <Modal.Actions>
                <Button
                  color='green'
                  onClick={this.onHandleShowTask}
                  inverted>
                  <Icon name='checkmark'/>
                  Next
                </Button>
              </Modal.Actions>
            </Modal>
          </Container>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state): Object {
  return {
    showTask: state.showTask
  }
}

export default connect(mapStateToProps)(WelcomeScreen);
