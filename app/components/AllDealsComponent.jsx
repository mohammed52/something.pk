import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';

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
var ButtonToolbar = ReactBootstrap.ButtonToolbar
var DropdownButton = ReactBootstrap.DropdownButton
var MenuItem = ReactBootstrap.MenuItem

const ENTER_KEY_CODE = 13;

class DealComponent extends Component {
  constructor(props) {
    super(props)
    this.onBankSelected = this.onBankSelected.bind(this)
    // this.onSave = this.onSave.bind(this);
    // this.onKeyDown = this.onKeyDown.bind(this);
    // this.onCardInputChange = this.onCardInputChange.bind(this)



    this.state = {
      bankDeals: [],
      bank: null
    };
  }

  onBankSelected(eventKey, event) {
    console.log("onBankSelected");
    console.log("event", event);
    console.log("eventKey", eventKey);
    const banks = this.props.banks
    console.log("banks[eventKey-1]", banks[eventKey - 1]);

    this.setState({
      bank: banks[eventKey - 1]
    })
  }

  render() {

    const {banks, deals, restaurants, cities} = this.props

    return (
      <div>
        All Deals Here
      </div>
    );
  }
}

DealComponent.propTypes = {
  banks: PropTypes.array.isRequired,
  deals: PropTypes.array.isRequired,
  restaurants: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,

  createDeal: PropTypes.func.isRequired,
  destroyDeal: PropTypes.func.isRequired,
};

export default DealComponent;
