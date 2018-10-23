/* @flow */

import * as Actions from '../actions/Actions';

const defaultState: Object = {
  nav: null,
  fetching: false,
  showTask: false
}

// TODO replace all action creators with constants

export default function creativityReducer(state: Object = defaultState, action: Object): Object {
  switch (action.type) {

    default:
      return state;
  }
}
