import React, { Component } from 'react';

export default class Movie extends Component {
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
              <p>
                <strong>{this.props.title}</strong> <small>{this.props.date}</small> <small>{this.props.event}</small>
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
