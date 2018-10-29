/* @flow */

import * as Actions from '../actions/Actions';

const defaultState: Object = {
  fetching: false,
  showTask: false,
  showNetwork: false,
  showUsers: false
}

// TODO replace all action creators with constants

export default function creativityReducer(state: Object = defaultState, action: Object): Object {
  switch (action.type) {

    case 'FETCH_TASK_DONE':
      console.log(action.result);
      return {
        ...state,
        showTask: action.result,
        showNetwork: false,
        showUsers: false
      }

    case 'FETCH_NETWORK_DONE':
      console.log(action.result);
      return {
        ...state,
        showTask: false,
        showNetwork: action.result,
        showUsers: false
      }

    case 'FETCH_SHOW_USERS_DONE':
      console.log(action.result);
      return {
        ...state,
        showTask: false,
        showNetwork: false,
        showUsers: action.result
      }
    default:
      return state;
  }
}
