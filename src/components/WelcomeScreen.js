import React, {Component} from 'react';

import 'semantic-ui-react';

class WelcomeScreen extends Component {

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
      paddingBottom: "0em"};

    let timeSegmentStyles = {height: "10em"};

    let timeStyles = {paddingTop: "2em"};

    let welcomeStyles = {color: "#fff",paddingTop: "2em"}

    let textStyles = {fontSize: "2em", lineHeight: "2em"};



    return (<div className="ui vertical segment" style={mainSegmentStyles}>

      <div className="ui stackable equal height grid" style={mainSegmentStyles}>

        <div className="four wide teal column">

          <div className="ui vertical segment">
            <div className="ui center aligned container">
              <div className="ui header" style={welcomeStyles}>
                Welcome!
              </div>
            </div>

          </div>

        </div>

        <div className="twelve wide column">

          <div className="ui vertical segment">

            <div className="ui center aligned container" style={timeSegmentStyles}>

                <div className="ui header" style={timeStyles}>{time}</div>

            </div>

          </div>

          <div className="ui vertical segment">
            <div className="ui center aligned container">
              <div style={textStyles}>{intro}</div>
              <div style={textStyles}>{instructions}</div>
              <div style={textStyles}>{tasks}</div>
              <ol>
                <li>{taskOne}</li>
                <li>{taskTwo}</li>
                <li>{taskThree}</li>
              </ol>
            </div>
          </div>

        </div>

      </div>
    </div>);
  }
}

export default WelcomeScreen;
