/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../src/components/App';
import Search from '../src/components/Search';
import EventList from '../src/components/EventList';

describe('components', () => {
  describe('<App />', () => {
    it('should render the title', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.contains(<h1>benjicwood / Event Genius</h1>)).to.be.true;
    });
    it('renders one <Search /> component', function () {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Search)).to.have.length(1);
    });
    it('renders one <EventList /> component', function () {
      const wrapper = shallow(<App />);
      expect(wrapper.find(EventList)).to.have.length(1);
    });
    it('should have 3 children', function () {
      const wrapper = shallow(<App />);
      expect(wrapper.children().length).to.equal(3);
    });
  });
});
