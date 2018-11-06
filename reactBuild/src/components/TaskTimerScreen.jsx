import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Button, Header, Modal, Container, Icon} from 'semantic-ui-react';

class TaskTimerScreen extends Component {

  state = {elapsed: 240, interval: ''}

  constructor(props) {
    super(props);
    // Bind all methods to 'this' context here
    (this: any).onHandleStartTimer = this.onHandleStartTimer.bind(this);
    (this: any).onHandleOpen = this.onHandleOpen.bind(this);
    (this: any).onHandleClose = this.onHandleClose.bind(this);
    (this: any).onGetSeconds = this.onGetSeconds.bind(this);
    (this: any).onGetMinutes = this.onGetMinutes.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {
    if (this.props.showTask) {
      var interval = setInterval(this.onHandleStartTimer, 1000);
      this.setState({interval: interval});
    }
  }

  componentWillUpdate(nextProps, nextState){
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  onGetSeconds(){
    return ('0' + this.state.elapsed % 60).slice(-2);
  }

  onGetMinutes(){
    return Math.floor(this.state.elapsed / 60);
  }

  onHandleStartTimer(){
    const{dispatch} = this.props;
    if (this.state.elapsed <= 0) {
      clearInterval(this.state.interval);
      if (this.props.showTask) {
        dispatch({type: 'FETCH_NETWORK', payload: false});
      }else if(this.props.showNetwork){
        dispatch({type: 'FETCH_SHOW_USERS', payload: false});
      }
    } else {
      this.setState({elapsed: (this.state.elapsed - 1)});
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
      return true;
    }
    return false;
  }

  onHandleClose = () => {
    this.setState({modalOpen: false})
  }

  render() {

    const modalContent = "In this next section, we will show you what others in your network came up with! You will be able to edit your own list if you get any new ideas! But remember only UNIQUE ideas count - if you just copy from others, we'll know :p" ;

    const modalTimeContent = "This is a time section";

    let isTimerActive = this.props.showTask;

    let mainSegmentStyles = {
      height: "100%",
      paddingBottom: "0em"
    };

    let timeSegmentStyles = {
      height: "10em"
    };

    let timeStyles = {
      paddingTop: "2em",
      fontSize: "3em",
      color: "#00B5AD"
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
          <Header style={timeStyles}>{this.onGetMinutes()}:{this.onGetSeconds()}</Header>

        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showTask: state.showTask,
    showNetwork: state.showNetwork,
    showUsers: state.showUsers
  }
}

export default connect(mapStateToProps)(TaskTimerScreen);
