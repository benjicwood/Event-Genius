/* global describe it beforeEach */
import { expect } from 'chai';
import reducer from '../src/reducer/reducer';
import * as actions from '../src/actions/actions';

export const initialState = {
  event: [],
  modalIsOpen: false,
  searchTerm: ''
};

describe('Reducer', function () {
  it('is a function', function () {
    expect(reducer).to.be.a('function');
  });
  describe('FETCH_EVENT_REQUEST', function () {
    it('dispatches when passed action FETCH_EVENT_REQUEST', function () {
      let action, newState;
      beforeEach(function () {
        action = actions.fetchEventRequest();
        newState = reducer(initialState, action);
        expect(newState).to.eql({ event: [], modalIsOpen: false, searchTerm: '' });
      });
    });
    it('does not mutate the initial state', function () {
      let action, newState;
      beforeEach(function () {
        action = actions.fetchEventRequest();
        newState = reducer(initialState, action);
        expect(newState).to.not.equal(initialState);
      });
    });
  });
});
