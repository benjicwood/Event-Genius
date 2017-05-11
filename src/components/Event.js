import React, { Component } from 'react';

export default class Movie extends Component {
  render () {
    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <figure className='image is-64x64'>
              <img src='http://bulma.io/images/placeholders/128x128.png' alt='Image' />
            </figure>
          </div>
          <div className='media-content'>
            <div className='content'>
              <p>
                <strong>Event name</strong> <small>Event date</small> <small>Event venue</small>
                <br />
                Event Info Here
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
