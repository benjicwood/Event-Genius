/* global describe it */
import { expect } from 'chai';
import * as actions from '../src/actions/actions';
import * as types from '../src/actions/types';

describe('Actions', () => {
  describe('actions.fetchEventRequest', () => {
    it('has a FETCH_EVENT_REQUEST', () => {
      expect(types.FETCH_EVENT_REQUEST).to.equal('FETCH_EVENT_REQUEST');
    });
    it('is a function', () => {
      expect(actions.fetchEventRequest).to.be.a('function');
    });
    it('returns an object', () => {
      expect(actions.fetchEventRequest()).to.be.an('object');
    });
  });
  describe('actions.fetchEventSuccess', () => {
    it('has a FETCH_EVENT_SUCCESS', () => {
      expect(types.FETCH_EVENT_SUCCESS).to.equal('FETCH_EVENT_SUCCESS');
    });
    it('is a function', () => {
      expect(actions.fetchEventSuccess).to.be.a('function');
    });
    it('should take 1 argument', function () {
      expect(actions.fetchEventSuccess.length).to.equal(1);
    });
  });
  describe('actions.fetchEventError', () => {
    it('has a FETCH_EVENT_ERROR', () => {
      expect(types.FETCH_EVENT_ERROR).to.equal('FETCH_EVENT_ERROR');
    });
    it('is a function', () => {
      expect(actions.fetchEventError).to.be.a('function');
    });
    it('returns an object', () => {
      expect(actions.fetchEventError()).to.be.an('object');
    });
    it('should take 1 argument', function () {
      expect(actions.fetchEventError.length).to.equal(1);
    });
  });
  describe('actions.fetchEventRequest', () => {
    it('has a FETCH_EVENT_INFO_REQUEST', () => {
      expect(types.FETCH_EVENT_INFO_REQUEST).to.equal('FETCH_EVENT_INFO_REQUEST');
    });
    it('is a function', () => {
      expect(actions.fetchEventInfoRequest).to.be.a('function');
    });
    it('returns an object', () => {
      expect(actions.fetchEventInfoRequest()).to.be.an('object');
    });
  });
  describe('actions.fetchEventInfoSuccess', () => {
    it('has a FETCH_EVENT_INFO_SUCCESS', () => {
      expect(types.FETCH_EVENT_INFO_SUCCESS).to.equal('FETCH_EVENT_INFO_SUCCESS');
    });
    it('is a function', () => {
      expect(actions.fetchEventInfoSuccess).to.be.a('function');
    });
    it('should take 1 argument', function () {
      expect(actions.fetchEventInfoSuccess.length).to.equal(1);
    });
  });
  describe('actions.fetchEventError', () => {
    it('has a FETCH_EVENT_INFO_ERROR', () => {
      expect(types.FETCH_EVENT_INFO_ERROR).to.equal('FETCH_EVENT_INFO_ERROR');
    });
    it('is a function', () => {
      expect(actions.fetchEventInfoError).to.be.a('function');
    });
    it('returns an object', () => {
      expect(actions.fetchEventInfoError()).to.be.an('object');
    });
    it('should take 1 argument', function () {
      expect(actions.fetchEventInfoError.length).to.equal(1);
    });
  });
  describe('actions.setSearchTerm', () => {
    it('has a SET_SEARCH_TERM type', () => {
      expect(types.SET_SEARCH_TERM).to.equal('SET_SEARCH_TERM');
    });
    it('is a function', () => {
      expect(actions.setSearchTerm).to.be.a('function');
    });
    it('returns an object', () => {
      expect(actions.setSearchTerm()).to.be.an('object');
    });
    it('should take 1 argument', function () {
      expect(actions.setSearchTerm.length).to.equal(1);
    });
  });
  describe('actions.modalOpen', () => {
    it('has a MODAL_OPEN type', () => {
      expect(types.MODAL_OPEN).to.equal('MODAL_OPEN');
    });
    it('is a function', () => {
      expect(actions.modalOpen).to.be.a('function');
    });
    it('returns an object', () => {
      expect(actions.modalOpen()).to.be.an('object');
    });
    it('should take 1 argument', function () {
      expect(actions.modalOpen.length).to.equal(1);
    });
  });
  describe('actions.modalClose', () => {
    it('has a MODAL_CLOSE type', () => {
      expect(types.MODAL_CLOSE).to.equal('MODAL_CLOSE');
    });
    it('is a function', () => {
      expect(actions.modalClose).to.be.a('function');
    });
    it('returns an object', () => {
      expect(actions.modalClose()).to.be.an('object');
    });
    it('should take 1 argument', function () {
      expect(actions.modalClose.length).to.equal(1);
    });
  });
});
