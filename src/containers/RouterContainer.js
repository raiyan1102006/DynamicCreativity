// React
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
import HomePage from "../containers/HomePage";

export class AppRouter extends Component {
  _element = React.createElement;

  constructor(props : Object) {
    super(props);
  }

  render() {

    return (
      <Router history={history}>
        <div>
          <Route
            path="/"
            component={HomePage}/>
          <Route
            path="/task"
            component={HomePage}/>
          <Route
            path="/network"
            component={HomePage}/>
        </div>
      </Router>
    );
  }
}

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
