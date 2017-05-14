import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { modalOpen, modalClose, fetchEventInfo } from '../actions/actions';

class ModalView extends Component {
  constructor () {
    super();
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal (event) {
    this.props.dispatch(modalOpen(event.target.value));
  }
  closeModal (event) {
    this.props.dispatch(modalClose(event.target.value));
  }
  render () {
    return (
      <div>
        <button type='button' className='btn btn-default' onClick={this.openModal}>Details</button>
        <Modal
          isOpen={this.props.modalIsOpen}
          contentLabel={'modal'}
          onRequestClose={this.closeModal}
        >
          <button className='button is-info is-outlined is-fullwidth' onClick={this.closeModal}>Close</button>
          <p>{this.props.date}</p>
          <p>{this.props.title}</p>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    modalIsOpen: state.modalIsOpen
  };
}

export default connect(mapStateToProps)(ModalView);
