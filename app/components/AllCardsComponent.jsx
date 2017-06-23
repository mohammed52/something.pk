import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';
import BankCardComponent from './BankCardComponent'

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import testStyles from '../css/components/test';



const cxTest = classNames.bind(testStyles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
var ReactBootstrap = require('react-bootstrap')
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup
var ControlLabel = ReactBootstrap.ControlLabel
var FormControl = ReactBootstrap.FormControl
var Radio = ReactBootstrap.Radio;
var Table = ReactBootstrap.Table
var FieldGroup = ReactBootstrap.FieldGroup
var Input = ReactBootstrap.Input


class AllCardsComponent extends Component {
  render() {
    const banks = this.props.banks;

    let arrBankCardComponents = [];

    for (var i = 0; i < banks.length; i++) {
      arrBankCardComponents.push(
        <div className="well" key={"arrBankCardComponents" + i}>
          <BankCardComponent bank={banks[i]} deleteCardFromBank={this.props.deleteCardFromBank} addCardToBank={this.props.addCardToBank} />
        </div>

      )
    }


    return (
      <div>
        AllCardsComponent
        {arrBankCardComponents}
      </div>
      );
  }
}

AllCardsComponent.propTypes = {
  banks: PropTypes.array.isRequired,
  deleteCardFromBank: PropTypes.func.isRequired,
  addCardToBank: PropTypes.func.isRequired,

};

export default AllCardsComponent;
