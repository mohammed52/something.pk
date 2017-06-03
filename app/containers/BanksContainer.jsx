import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddBankComponent from '../components/AddBankComponent'

import { createBank } from '../actions/banksActions';

var ReactBootstrap = require('react-bootstrap')
var Button = ReactBootstrap.Button
var Modal = ReactBootstrap.Modal
var FormGroup = ReactBootstrap.FormGroup
var ControlLabel = ReactBootstrap.ControlLabel
var FormControl = ReactBootstrap.FormControl
var Radio = ReactBootstrap.Radio
var Table = ReactBootstrap.Table
var FieldGroup = ReactBootstrap.FieldGroup
var Input = ReactBootstrap.Input



class BanksContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {children} = this.props

    return (
      <div>
        <AddBankComponent createBank={this.props.createBank} />
      </div>
    );
  }
}

BanksContainer.propTypes = {
  children: PropTypes.object,
  createBank: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    banks: state.topic.banks,
  };
}

export default connect(mapStateToProps, {
  createBank
})(BanksContainer);
