import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import ModalEvent from './ModalEvent';

class ModalView extends Component {
  constructor () {
    super();
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal (event) {
    this.props.dispatch(actions.modalOpen(event.target.value));
    this.props.dispatch(actions.fetchEventInfo(this.props.id));
  }
  closeModal (event) {
    this.props.dispatch(actions.modalClose(event.target.value));
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
          <p>{this.props.modalEvent.title}</p>
          <ModalEvent
            informationtitle={this.props.modalEvent.information_title}
            image={this.props.modalEvent.image}
            informationdescription={this.props.modalEvent.information_description}
            venue={this.props.modalEvent.venue}
            />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    modalIsOpen: state.modalIsOpen,
    modalEvent: state.modalEvent
  };
}

export default connect(mapStateToProps)(ModalView);
