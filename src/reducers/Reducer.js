/* @flow */

import * as Actions from '../actions/Actions';

const defaultState: Object = {
  fetching: false,
  showTask: false
}

// TODO replace all action creators with constants

export default function creativityReducer(state: Object = defaultState, action: Object): Object {
  switch (action.type) {

    case 'FETCH_TASK_DONE':
      console.log(action.result);
      return {
        ...state,
        showTask: action.result
      }

    default:
      return state;
  }
}
