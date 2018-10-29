import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Button,
  Header,
  Modal,
  Container,
  Icon,
  Form,
  Message
} from 'semantic-ui-react';

class TaskScreen extends Component {

  state = {
    modalOpen: false,
    showErr: false,
    inputOne:' ',
    inputTwo:' ',
    inputThree:' ',
    inputFour:' ',
    inputFive:' ',
    inputSix:' '
  };

  show = dimmer => () => this.setState({dimmer});

  constructor(props: Object) {
    super(props);
    // Bind all methods to 'this' context here
    (this: any).onHandleNetworkTask = this.onHandleNetworkTask.bind(this);
    (this: any).onHandleOpen = this.onHandleOpen.bind(this);
    (this: any).onHandleClose = this.onHandleClose.bind(this);
    (this: any).onHandleOneChange = this.onHandleOneChange.bind(this);
    (this: any).onHandleTwoChange = this.onHandleTwoChange.bind(this);
    (this: any).onHandleThreeChange = this.onHandleThreeChange.bind(this);
    (this: any).onHandleFourChange = this.onHandleFourChange.bind(this);
    (this: any).onHandleFiveChange = this.onHandleFiveChange.bind(this);
    (this: any).onHandleSixChange = this.onHandleSixChange.bind(this);

  }

  componentWillUpdate(nextProps, nextState) {
    return true;
  }

  onHandleNetworkTask = () => {
    this.onHandleClose();
    const{dispatch} = this.props;
    if (this.props.showTask) {
      dispatch({type: 'FETCH_NETWORK', payload: false});
    }else if(this.props.showNetwork){
      dispatch({type: 'FETCH_SHOW_USERS', payload: false});
    }
  }

  onHandleOpen = () => {
    if (this.state.inputOne===' '||
      this.state.inputTwo===' '||
      this.state.inputThree===' '||
      this.state.inputFour==='' ||
      this.state.inputFive===' '||
      this.state.inputSix===' ') {
        this.setState({showErr: true});
    }else{
      this.show('blurring');
      this.setState({modalOpen: true});
    }
  }

  onHandleClose = () => {
    this.setState({modalOpen: false})
  }

  onHandleOneChange = (event) => {
    this.setState({inputOne: event.target.value});
  }

  onHandleTwoChange = (event) => {
    this.setState({inputTwo: event.target.value});
  }

  onHandleThreeChange = (event) => {
    this.setState({inputThree: event.target.value});
  }

  onHandleFourChange = (event) => {
    this.setState({inputFour: event.target.value});
  }

  onHandleFiveChange = (event) => {
    this.setState({inputFive: event.target.value});
  }

  onHandleSixChange = (event) => {
    this.setState({inputSix: event.target.value});
  }

  render() {

    const modalContent = "In this next section, we will show you what others in your network came up with! You will be able to edit your own list if you get any new ideas! But remember only UNIQUE ideas count - if you just copy from others, we'll know :p" ;

    const modalTimeContent = "This is a time section";
    const {dimmer} = this.state;

    let isNetworkActive = this.props.showNetwork;
    let isErr = this.state.showErr;
    let width = 12;
    let modalStyles = {
      paddingRight: "2em"
    };

    let segmentStyles = {
      paddingBottom: "7em"
    };

    if (isNetworkActive) {
      width = 6;
    }

    if (isErr) {
      return (
      <div>
        <div className="ui vertical segment" style={segmentStyles}>
          <Container text>
            <Form error>
              <Form.Field>
                <label>First Use</label>
                <Form.Input width={width} onChange={this.onHandleOneChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Second Use</label>
                <Form.Input width={width} onChange={this.onHandleTwoChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Third Use</label>
                <Form.Input width={width} onChange={this.onHandleThreeChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Fourth Use</label>
                <Form.Input width={width} onChange={this.onHandleFourChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Fifth Use</label>
                <Form.Input width={width} onChange={this.onHandleFiveChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Sixth Use </label>
                <Form.Input width={width} onChange={this.onHandleSixChange} placeholder='Enter Input'/>
              </Form.Field>
              <Message
                error
                header='Action Forbidden'
                content='Please fill in the boxes!'
              />
              <Container textAlign='right' style={modalStyles}>
                <Modal
                  dimmer={dimmer}
                  trigger={
                    <Button
                      color='teal'
                      onClick={this.onHandleOpen}>
                        Next
                    </Button>}
                  open={this.state.modalOpen} onClose={this.onHandleClose}
                  basic
                  size='small'>

                  <Header
                    size='medium'
                    icon='browser'
                    content='Ready?'/>

                  <Modal.Content>
                    <div>
                      {modalContent}
                    </div>

                    <header
                      size='small'
                      color='red'
                      content={modalTimeContent}/>
                  </Modal.Content>

                  <Modal.Actions>
                    <Button
                      color='green'
                      onClick={this.onHandleNetworkTask} inverted="inverted">
                      <Icon
                        name='checkmark'/>
                      Continue
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Container>

            </Form>
          </Container>
        </div>
      </div>);
    }else{
      return (
      <div>
        <div className="ui vertical segment" style={segmentStyles}>
          <Container text>
            <Form>
              <Form.Field>
                <label>First Use</label>
                <Form.Input width={width} onChange={this.onHandleOneChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Second Use</label>
                <Form.Input width={width} onChange={this.onHandleTwoChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Third Use</label>
                <Form.Input width={width} onChange={this.onHandleThreeChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Fourth Use</label>
                <Form.Input width={width} onChange={this.onHandleFourChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Fifth Use</label>
                <Form.Input width={width} onChange={this.onHandleFiveChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Sixth Use </label>
                <Form.Input width={width} onChange={this.onHandleSixChange} placeholder='Enter Input'/>
              </Form.Field>

              <Container style={modalStyles}>
                <Modal trigger={<Button color = 'teal' onClick = {
                    this.onHandleOpen
                  } > Begin </Button>} open={this.state.modalOpen} onClose={this.onHandleClose} basic size='small'>

                  <Header icon='browser' size='huge' content='Ready?'/>

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
                    <Button color='green' onClick={this.onHandleNetworkTask} inverted>
                      <Icon name='checkmark'/>
                      Next
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Container>

            </Form>
          </Container>
        </div>
      </div>);
    }
  }
}

function mapStateToProps(state): Object {
  return {
    showTask: state.showTask,
    showNetwork: state.showNetwork,
    showUsers: state.showUsers
  }
}

export default connect(mapStateToProps)(TaskScreen);
