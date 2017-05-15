import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from '../actions/actions';

class Search extends Component {
  constructor (props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value));
  }
  render () {
    return (
      <div style={{width: '600px', margin: '0 auto', paddingBottom: '30px'}}>
        <div className='field'>
          <label className='label'>Search</label>
          <p className='control'>
            <input className='input' type='text' placeholder='title...' onChange={this.handleInputChange} />
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    search: state.search
  };
}

export default connect(mapStateToProps)(Search);
