import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import AddBankComponent from '../components/AddBankComponent'

// import { createBank, destroyBank } from '../actions/banksActions';

// var ReactBootstrap = require('react-bootstrap')
// var Button = ReactBootstrap.Button
// var Modal = ReactBootstrap.Modal
// var FormGroup = ReactBootstrap.FormGroup
// var ControlLabel = ReactBootstrap.ControlLabel
// var FormControl = ReactBootstrap.FormControl
// var Radio = ReactBootstrap.Radio
// var Table = ReactBootstrap.Table
// var FieldGroup = ReactBootstrap.FieldGroup
// var Input = ReactBootstrap.Input



class CardsContainer extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {


    return (
      <div>
        cards container
      </div>
      );
  }
}

CardsContainer.propTypes = {

};

function mapStateToProps(state) {
  // return {
  //   banks: state.bank.banks,
  // };
}

export default connect(mapStateToProps, {
  // createBank,
  // destroyBank
})(CardsContainer);
