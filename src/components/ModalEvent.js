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
              <p><strong>{this.props.informationtitle}</strong><br />
                <strong>{this.props.venue}</strong></p>
              <a href={this.props.url}>Go To Event via Ticket Arena</a>
              <div>{htmlviewer(this.props.informationdescription)}</div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
