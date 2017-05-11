import * as types from '../actions/types';

export const initialState = {
  event: []
};

export default function reducer (state, action) {
  state = state || initialState;
  switch (action.type) {
    case types.FETCH_EVENT_REQUEST:
      return Object.assign({}, state, {
        movie: action.event
      });
    case types.FETCH_EVENT_SUCCESS:
      return Object.assign({}, state, {
        movie: action.event
      });
    case types.FETCH_EVENT_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}
