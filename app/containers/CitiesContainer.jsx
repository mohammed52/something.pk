import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import CitiesComponent from '../components/CitiesComponent'


// import { createBank, destroyBank } from '../actions/banksActions';

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



class CitiesContainer extends Component {

  render() {
    const banks = this.props.banks

    return (
      <div>
        CitiesContainer
        <CitiesComponent />
      </div>
    );
  }
}

// CitiesContainer.propTypes = {

// };

function mapStateToProps(state) {
  return {
    // banks: state.bank.banks,
  };
}

export default connect(mapStateToProps, {
  // addCardToBank,
  // deleteCardFromBank
})(CitiesContainer);