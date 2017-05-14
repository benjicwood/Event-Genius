import * as types from './types';
import request from 'superagent';
import { ROOT } from '../../config';

export function fetchEvent () {
  return (dispatch) => {
    request
    .get(`${ROOT}`)
    .end((error, response) => {
      if (error) dispatch(fetchEventError(error));
      else dispatch(fetchEventSuccess(response.body));
    });
  };
}

export function fetchEventRequest () {
  return {
    types: types.FETCH_EVENT_REQUEST
  };
}

export function fetchEventSuccess (event) {
  return {
    type: types.FETCH_EVENT_SUCCESS,
    event: event
  };
}

export function fetchEventError (error) {
  return {
    type: types.FETCH_EVENT_ERROR,
    error: error
  };
}

export function modalOpen (modalIsOpen) {
  return {
    type: types.MODAL_OPEN,
    modalIsOpen: true
  };
}

export function modalClose (modalIsOpen) {
  return {
    type: types.MODAL_CLOSE,
    modalIsOpen: false
  };
}

export function setSearchTerm (search) {
  return {
    type: types.SET_SEARCH_TERM,
    search: search
  };
}

export function fetchEventInfo (id) {
  return (dispatch) => {
    request
    .get(`${ROOT}/${id}`)
    .end((error, response) => {
      if (error) dispatch(fetchEventInfoError(error));
      else dispatch(fetchEventInfoSuccess(response.body));
    });
  };
}

export function fetchEventInfoRequest () {
  return {
    types: types.FETCH_EVENT_INFO_REQUEST
  };
}

export function fetchEventInfoSuccess (modalEvent) {
  return {
    type: types.FETCH_EVENT_INFO_SUCCESS,
    modalEvent: modalEvent
  };
}

export function fetchEventInfoError (error) {
  return {
    type: types.FETCH_EVENT_INFO_ERROR,
    error: error
  };
}
