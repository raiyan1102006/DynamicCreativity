import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
  }

  constructor(props: Object) {
    super(props);
    // Bind all methods to 'this' context here
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

  onHandleOpen = () => {
    if (this.state.inputOne===' '||
      this.state.inputTwo===' '||
      this.state.inputThree===' '||
      this.state.inputFour==='' ||
      this.state.inputFive===' '||
      this.state.inputSix===' ') {
        this.setState({showErr: true});
    }else{
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

    const time = "2:00";
    const intro = "Thank you for particpating in the Creativity Project!";
    const modalContent = "In this first section, you will be provided 4 minutes to list alternative uses for the prompt. Please note that vulgar answers can result in your expulsion from the study. You need to enter input to continue";
    const instructions = "This study consists of 5 Tasks";
    const tasks = "Each task will have three scetions";
    const taskOne = "You will be asked to come up with alternate uses of the given object";
    const taskTwo = "After you submit your list, we will show what others in your network submitted and you will get to edit your answers";
    const taskThree = "Then you will be able to view all members of your network and change who you follow, before the next task starts";

    const err =
      <Message
        error
        header='Action Forbidden'
        content='Please fill in the boxes!'
      />;

    let isErr = this.state.showErr;
    console.log(isErr);

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

    if (isErr) {
      return (<div className="twelve wide column">

        <div className="ui vertical segment">

          <Container textAlign='center' style={timeSegmentStyles}>

            <Header style={timeStyles}> </Header>

          </Container>

        </div>

        <div className="ui vertical segment">
          <Container text="text">
            <Form error>
              <Form.Field>
                <label>First Use</label>
                <Form.Input onChange={this.onHandleOneChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Second Use</label>
                <Form.Input onChange={this.onHandleTwoChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Third Use</label>
                <Form.Input onChange={this.onHandleThreeChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Fourth Use</label>
                <Form.Input onChange={this.onHandleFourChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Fifth Use</label>
                <Form.Input onChange={this.onHandleFiveChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Sixth Use </label>
                <Form.Input onChange={this.onHandleSixChange} placeholder='Enter Input'/>
              </Form.Field>
              <Message
                error
                header='Action Forbidden'
                content='Please fill in the boxes!'
              />
              <Container textAlign='right' style={modalStyles}>
                <Modal trigger={<Button color = 'teal' onClick = {
                    this.onHandleOpen
                  } > Begin </Button>} open={this.state.modalOpen} onClose={this.onHandleClose} basic="basic" size='small'>

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
                    <Button color='green' onClick={this.onHandleClose} inverted="inverted">
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
    }else{
      return (<div className="twelve wide column">

        <div className="ui vertical segment">

          <Container textAlign='center' style={timeSegmentStyles}>

            <Header style={timeStyles}></Header>

          </Container>

        </div>

        <div className="ui vertical segment">
          <Container text="text">
            <Form>
              <Form.Field>
                <label>First Use</label>
                <Form.Input onChange={this.onHandleOneChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Second Use</label>
                <Form.Input onChange={this.onHandleTwoChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Third Use</label>
                <Form.Input onChange={this.onHandleThreeChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Fourth Use</label>
                <Form.Input onChange={this.onHandleFourChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Fifth Use</label>
                <Form.Input onChange={this.onHandleFiveChange} placeholder='Enter Input'/>
              </Form.Field>
              <Form.Field>
                <label>Sixth Use </label>
                <Form.Input onChange={this.onHandleSixChange} placeholder='Enter Input'/>
              </Form.Field>

              <Container textAlign='right' style={modalStyles}>
                <Modal trigger={<Button color = 'teal' onClick = {
                    this.onHandleOpen
                  } > Begin </Button>} open={this.state.modalOpen} onClose={this.onHandleClose} basic="basic" size='small'>

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
                    <Button color='green' onClick={this.onHandleClose} inverted="inverted">
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

export default TaskScreen;
