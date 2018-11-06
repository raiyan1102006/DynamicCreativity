// React
import React, {Component} from "react";
import {Router, Route, Switch} from "react-router-dom";

// Redux
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

// history
import history from "../utils/history.jsx";

// Actions
//import * as AppActions from "../actions/Actions";

// Components && Containers
import HomePage from "../containers/HomePage.jsx";
import NetworkPanel from "../containers/NetworkPanel.jsx";

import UsersScreen from "../components/UsersScreen.jsx";
import TaskScreen from "../components/TaskScreen.jsx";
import StepNavigation from "../components/StepNavigation.jsx";

export class AppRouter extends Component {


  constructor(props) {
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

function mapStateToProps(state, ownProps) {
  return {

  };
}

/*
function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch);
}
*/

export default connect(mapStateToProps)(AppRouter);
