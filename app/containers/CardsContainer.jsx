import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { deleteCardFromBank, addCardToBank } from '../actions/banksActions';


import AddCardComponent from '../components/AddCardComponent'
import AllCardsComponent from '../components/AllCardsComponent'


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



class CardsContainer extends Component {
  constructor(props) {
    super(props)
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({
      showModal: false
    })
  }

  open() {
    this.setState({
      showModal: true
    })
  }

  render() {
    const banks = this.props.banks

    return (
      <div>
        <AddCardComponent />
        <AllCardsComponent banks={banks} deleteCardFromBank={this.props.deleteCardFromBank} addCardToBank={this.props.addCardToBank} />
      </div>
      );
  }
}

// CardsContainer.propTypes = {

// };

function mapStateToProps(state) {
  return {
    banks: state.bank.banks,
  };
}

export default connect(mapStateToProps, {
  addCardToBank,
  deleteCardFromBank
})(CardsContainer);

