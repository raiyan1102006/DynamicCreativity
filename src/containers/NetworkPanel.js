import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Button, Header, Modal, Container, Icon} from 'semantic-ui-react';

import NetworkScreen from '../components/NetworkScreen';
import TaskScreen from '../components/TaskScreen';

class NetworkPanel extends Component {

  render() {
    return (
      <div className="ui vertical segment" >

        <div className="ui stackable grid" >

          <div className="eight wide  column">
            <NetworkScreen/>
          </div>

          <div className="eight wide column">
            <TaskScreen/>
          </div>

        </div>

      </div>
    );
  }

}

function mapStateToProps(state): Object {
  return {
    showTask: state.showTask,
    showNetwork: state.showNetwork
  }
}

export default connect(mapStateToProps)(NetworkPanel);
