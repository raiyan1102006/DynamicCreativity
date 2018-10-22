import React, {Component} from "react";

import {Router, Route} from "react-router-dom";

// Redux
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

// history
import history from "../utils/history";

// Actions
//import * as AppActions from "../actions/Actions";

// Components
import WelcomeScreen from "../components/WelcomeScreen";

export class AppRouter extends Component {
  _element = React.createElement;

  constructor(props : Object) {
    super(props);
  }

  render() {

    return (
      <Router history={history}>
        <Route
          path="/"
          component={WelcomeScreen}/>
      </Router>
    );
  }
}


/* * Function that returns all branches of the state tree we want this container to subscribe to
* Called every time the state is updated, these results get merged into the container's props
* i.e this.props.definitions = state.definitions. Passed as an argument to connect()
*
*@param {Object} state - the Redux state set up in Reducer.js
*@return {Object} */

function mapStateToProps(state, ownProps): Object {
  return {

  };
}

/*
function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}
*/

export default connect(mapStateToProps)(AppRouter);
