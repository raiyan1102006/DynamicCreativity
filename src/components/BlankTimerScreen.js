import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Button, Header, Modal, Container, Icon} from 'semantic-ui-react';

class BlankTimerScreen extends Component {

  constructor(props: Object) {
    super(props);
    // Bind all methods to 'this' context here
  }

  componentWillMount(): Object {

  }

  componentDidMount(): Object {

  }

  componentWillUpdate(nextProps, nextState): Object {
    return true;
  }

  render() {

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
      <div className="ui vertical segment">
        <Container textAlign='center' style={timeSegmentStyles}>
          <Header style={timeStyles}></Header>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state): Object {
  return {
    showTask: state.showTask
  }
}

export default connect(mapStateToProps)(BlankTimerScreen);
