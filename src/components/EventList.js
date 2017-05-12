import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Event from './Event';

class EventList extends Component {
  componentWillMount () {
    this.props.fetchEvent(this.props.event);
  }
  render () {
    if (!this.props.event) {
      return (
        <div>No Events</div>
      );
    } else {
      return (
        <div style={{width: '800px', margin: '0 auto'}}>
          {this.props.event.map(function (event, i) {
            return <Event
              title={event.title}
              date={event.date}
              image={event.image}
              venue={event.venue}
              id={event.id}
              key={i} />;
          }).slice(0, 10)
        }
        </div>
      );
    }
  }
}

function mapStateToProps (state) {
  return {
    event: state.event
  };
}

function mapDispatchToProps (dispatch, props) {
  return {
    fetchEvent: () => {
      dispatch(actions.fetchEvent());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
