// React
import React, {Component} from "react";
import {Router, Route, Switch} from "react-router-dom";

// Redux
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

// history
import history from "../utils/history";

// Actions
//import * as AppActions from "../actions/Actions";

// Components && Containers
import HomePage from "../containers/HomePage";
import NetworkPanel from "../containers/NetworkPanel";

import UsersScreen from "../components/UsersScreen";
import TaskScreen from "../components/TaskScreen";
import StepNavigation from "../components/StepNavigation";

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
            exact={true} path="/"
            component={HomePage}/>
          <Route
            exact={true} path="/secondTask"
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
