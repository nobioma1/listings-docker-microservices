import { SET_SESSION, CLEAR_SESSION } from '../actions/sessions';

const INITIAL_STATE = null;

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SESSION:
      return action.session;
    case CLEAR_SESSION:
      return null;
    default:
      return state;
  }
};

export default sessionReducer;
