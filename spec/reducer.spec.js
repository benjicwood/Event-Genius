/* global describe it beforeEach */
import { expect } from 'chai';
import reducer from '../src/reducer/reducer';
import * as actions from '../src/actions/actions';

export const initialState = {
  event: [],
  modalIsOpen: false
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
        expect(newState).to.eql({ event: [], modalIsOpen: false });
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
  // describe('FETCH_EVENT_SUCCESS', function () {
  //   it('dispatches when passed action FETCH_EVENT_SUCCESS', function () {
  //     let action, newState;
  //     beforeEach(function () {
  //       action = actions.fetchEventSuccess(['events here']);
  //       newState = reducer(initialState, action);
  //       expect(newState).to.eql({ event: ['events here'], modalIsOpen: false });
  //     });
  //   });
  //   it('does not mutate the initial state', function () {
  //     let action, newState;
  //     beforeEach(function () {
  //       action = actions.fetchEventSuccess(['events here']);
  //       newState = reducer(initialState, action);
  //       expect(newState).to.not.equal(initialState);
  //     });
  //   });
  //   it('changes articles property to action.data', function () {
  //     let action, newState;
  //     beforeEach(function () {
  //       action = actions.fetchEventSuccess(['events here']);
  //       newState = reducer(initialState, action);
  //       expect(newState.events).to.eql(['events here']);
  //     });
  //   });
  // });
  // describe('FETCH_EVENT_ERROR', function () {
  //   it('dispatches when passed action FETCH_EVENT_ERROR', function () {
  //     let action, newState;
  //     beforeEach(function () {
  //       action = actions.fetchEventError('error');
  //       newState = reducer(initialState, action);
  //       expect(newState).to.eql({ event: [], modalIsOpen: false });
  //     });
  //   });
  //   it('does not mutate the initial state', function () {
  //     let action, newState;
  //     beforeEach(function () {
  //       action = actions.fetchEventError('error');
  //       newState = reducer(initialState, action);
  //       expect(newState).to.not.equal(initialState);
  //     });
  //   });
  //   it('changes error property to action.error', function () {
  //     let action, newState;
  //     beforeEach(function () {
  //       action = actions.fetchEventError('error');
  //       newState = reducer(initialState, action);
  //       expect(newState.error).to.equal('error');
  //     });
  //   });
  // });
});
