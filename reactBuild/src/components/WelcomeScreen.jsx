import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {Button, Header, Modal, Container, Icon} from 'semantic-ui-react';

class WelcomeScreen extends Component {

  state = { modalOpen: false }

  show = dimmer => () => this.setState({dimmer});

  constructor(props) {
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
    this.show('blurring');
    this.setState({modalOpen: true})
  }

  onHandleClose = () => {
    this.setState({modalOpen: false});
  }

  render() {

    //Props and State
    const {onShowTask} = this.props;
    const {dimmer} = this.state;

    //Constants -- need to export to another file
    const time = "2:00";
    const intro = "Thank you for particpating in the Creativity Project!";
    const modalContent = "In this first section, you will be provided 4 minutes to list alternative uses for the prompt. Please note that vulgar answers can result in your expulsion from the study. You need to enter input to continue";
    const instructions = "This study consists of 5 Tasks";
    const tasks = "Each task will have three scetions:";
    const taskOne = "You will be asked to come up with alternate uses of the given object";
    const taskTwo = "After you submit your list, we will show what others in your network submitted and you will get to edit your answers";
    const taskThree = "Then you will be able to view all members of your network and change who you follow, before the next task starts";
    const modalTimeContent = "This is a time section";

    //Styles -- also export to another file
    let mainSegmentStyles = {
      height: "100%",
      paddingBottom: "0em"
    };

    let segmentStyles = {
      paddingBottom: "10em"
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
        <div className="ui vertical segment" style={segmentStyles}>
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

          <Container textAlign='right' style={modalStyles}>
            <Modal
              dimmer={dimmer}
              trigger={
                <Button
                  color='teal'
                  onClick = {this.onHandleOpen}> Begin Study
                </Button>}
              open={this.state.modalOpen}
              onClose={this.onHandleClose}
              size='small'>

              <Header icon='browser' content='Ready?'/>

              <Modal.Content>
                <div>
                  {modalContent}
                </div>

                <Header
                  size='small'
                  color='red'
                  content={modalTimeContent}/>
              </Modal.Content>

              <Modal.Actions>
                <Button
                  color='green'
                  onClick={this.onHandleShowTask}
                  inverted>
                  <Icon name='checkmark'/>
                  Begin
                </Button>
              </Modal.Actions>
            </Modal>
          </Container>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showTask: state.showTask,
    showNetwork: state.showNetwork
  }
}

export default connect(mapStateToProps)(WelcomeScreen);
