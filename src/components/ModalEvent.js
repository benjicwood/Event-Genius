import React, { Component } from 'react';

import htmlviewer from '../helpers/htmlviewer';

export default class ModalEvent extends Component {
  render () {
    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <figure className='image is-64x64'>
              <img src={this.props.image} alt='Image' />
            </figure>
          </div>
          <div className='media-content'>
            <div className='content'>
              <p><strong>{this.props.informationtitle}</strong></p>
              <p><strong>Venue: {this.props.venue}</strong></p>
              <p><strong>Event Type: {this.props.type}</strong></p>
              <a href={this.props.url}>See Event on Ticket Arena</a>
              <div>{htmlviewer(this.props.informationdescription)}</div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
