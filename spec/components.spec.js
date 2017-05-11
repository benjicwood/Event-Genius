/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../src/components/App';

describe('components', () => {
  describe('<App />', () => {
    it('should render the title', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.contains(<h1>benjicwood / Event Genius</h1>)).to.be.true;
    });
  });
});
