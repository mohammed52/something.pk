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
import SingleCardRowComponent from './SingleCardRowComponent'



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


class BankCardComponent extends Component {
  render() {
    const bank = this.props.bank;
    const cards = bank.cards;
    var arrSingleCardRowComponents = []
    if (cards !== undefined && cards.length > 0) {
      for (var i = 0; i < cards.length; i++) {
        arrSingleCardRowComponents.push(
          <SingleCardRowComponent key={"arrSingleCardRowComponents" + i}
                                  card={cards[i]}
                                  iteration={i} />
        )
      }

    }

    return (
      <div>
        <h3>{bank.fullName}</h3>
        <table className="table">
          <tbody>
            <tr>
              <th>
                S/N
              </th>
              <th>
                Card Name
              </th>
              <th>
                Actions
              </th>
            </tr>
            {arrSingleCardRowComponents}
          </tbody>
        </table>
      </div>
    );
  }
}

BankCardComponent.propTypes = {
  bank: PropTypes.object.isRequired,
};

export default BankCardComponent;
