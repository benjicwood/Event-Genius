import React, { Component } from 'react';

import EventList from './EventList';
import Search from './Search';

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>benjicwood / Event Genius</h1>
        <Search />
        <EventList />
      </div>
    );
  }
}
