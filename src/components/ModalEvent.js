import React, { Component } from 'react';

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
              <p><strong>{this.props.informationtitle}</strong> <small>{this.props.url}</small> <small>{this.props.venue}</small></p>
              <p>{this.props.informationdescription}</p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
