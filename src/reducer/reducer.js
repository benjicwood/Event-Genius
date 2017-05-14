import * as types from '../actions/types';

export const initialState = {
  event: [],
  modalIsOpen: false,
  modalEvent: [],
  search: ''
};

export default function reducer (state, action) {
  state = state || initialState;
  switch (action.type) {
    case types.FETCH_EVENT_REQUEST:
      return Object.assign({}, state, {
        event: action.event
      });
    case types.FETCH_EVENT_SUCCESS:
      return Object.assign({}, state, {
        event: action.event
      });
    case types.FETCH_EVENT_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    case types.FETCH_EVENT_INFO_REQUEST:
      return Object.assign({}, state, {
        modalEvent: action.modalEvent
      });
    case types.FETCH_EVENT_INFO_SUCCESS:
      return Object.assign({}, state, {
        modalEvent: action.modalEvent
      });
    case types.FETCH_EVENT_INFO_ERROR:
      return Object.assign({}, state, {
        error: action.error
      });
    case types.MODAL_OPEN:
      return Object.assign({}, state, {
        modalIsOpen: action.modalIsOpen
      });
    case types.MODAL_CLOSE:
      return Object.assign({}, state, {
        modalIsOpen: action.modalIsOpen
      });
    case types.SET_SEARCH_TERM:
      return Object.assign({}, state, {
        search: action.search
      });
    default:
      return state;
  }
}
