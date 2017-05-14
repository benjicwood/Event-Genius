/* global describe it */
import { expect } from 'chai';

import htmlviewer from '../src/helpers/htmlviewer';

describe('Helper Functions', function () {
  describe('htmlviewer', function () {
    it('is a function', function () {
      expect(htmlviewer).to.be.a('function');
    });
    it('takes one argument', function () {
      expect(htmlviewer.length).to.equal(1);
    });
    it('returns a react div element as an object', function () {
      expect(htmlviewer()).to.be.a('object');
    });
  });
});
