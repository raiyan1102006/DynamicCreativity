import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Button, Header, Modal, Container, Icon} from 'semantic-ui-react';

class BeginTask extends Component {

  state = {
    modalOpen: false
  }

  handleOpen = () => this.setState({modalOpen: true})

  handleClose = () => this.setState({modalOpen: false})

  render() {

    const time = "2:00";
    const intro = "Thank you for particpating in the Creativity Project!";
    const instructions = "This study consists of 5 Tasks";
    const tasks = "Each task will have three scetions";
    const taskOne = "You will be asked to come up with alternate uses of the given object";
    const taskTwo = "After you submit your list, we will show what others in your network submitted and you will get to edit your answers";
    const taskThree = "Then you will be able to view all members of your network and change who you follow, before the next task starts";

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

    return (<div className="ui vertical segment" style={mainSegmentStyles}>

      <div className="ui stackable equal height grid" style={mainSegmentStyles}>

        <div className="four wide teal column">

          <div className="ui vertical segment">
            <Container textAlign='center'>
              <Header style={welcomeStyles}>
                Welcome!
              </Header>
            </Container>

          </div>

        </div>

        <div className="twelve wide column">

          <div className="ui vertical segment">

            <Container textAlign='center' style={timeSegmentStyles}>

              <Header style={timeStyles}></Header>

            </Container>

          </div>

          <div className="ui vertical segment">
            <Container text="text">

            </Container>
          </div>

          <div className="ui vertical segment">
            <Container textAlign='right' style={modalStyles}>
              <Modal trigger={<Button color='teal' onClick = {
                  this.handleOpen
                } > Begin < /Button>} open={this.state.modalOpen} onClose={this.handleClose} basic="basic" size='small'>

                <Header icon='browser' content='Ready?'/>

                <Modal.Content>
                  <div>
                    In this first section, you will be provided 4 minutes to list alternative uses for the prompt. Please note that vulgar answers can result in your expulsion from the study. You need to enter input to continue
                  </div>

                  <div>
                    This is a timed section
                  </div>
                </Modal.Content>

                <Modal.Actions>
                  <Button
                    color='green'
                    onClick={this.handleClose}
                    inverted="inverted">
                    <Icon name='checkmark'/>
                    <Link to ="/begin"></Link>Begin Task
                  </Button>
                </Modal.Actions>
              </Modal>
            </Container>
          </div>

        </div>

      </div>
    </div>);
  }
}

export default BeginTask;
