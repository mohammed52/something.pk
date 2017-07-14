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

const ENTER_KEY_CODE = 13;

class BankCardComponent extends Component {
  constructor(props) {
    super(props)
    this.deleteCard = this.deleteCard.bind(this)
    this.onSave = this.onSave.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onCardInputChange = this.onCardInputChange.bind(this)

    this.state = {
      newCard: ""
    };
  }

  onSave() {
    console.log("onSave");
    const addCardToBank = this.props.addCardToBank
    addCardToBank(this.props.bank, this.state.newCard)
    this.refs.refInputAddCard.value = '';
  }


  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      console.log("enter pressed")
      if (this.state.newCard !== "") {
        this.onSave()
      }
    }
  }

  deleteCard(cardName) {
    console.log("deleteCard1");
    const deleteCardFromBank = this.props.deleteCardFromBank
    console.log("this.props.bank", this.props.bank);
    console.log("cardName", cardName);
    deleteCardFromBank(this.props.bank, cardName)
  }

  onCardInputChange(event) {
    this.setState({
      newCard: event.target.value
    })
  }

  render() {
    const bank = this.props.bank;
    const cards = bank.cards;
    var arrSingleCardRowComponents = []
    if (cards !== undefined && cards.length > 0) {
      for (var i = 0; i < cards.length; i++) {
        arrSingleCardRowComponents.push(
          <SingleCardRowComponent key={"arrSingleCardRowComponents" + i}
                                  card={cards[i]}
                                  iteration={i}
                                  deleteCardFromBank={this.deleteCard} />

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
        <div>
          <ControlLabel>
            Add Card:
          </ControlLabel>
          <input id="id-add-new-card"
                 onKeyDown={this.onKeyDown}
                 ref="refInputAddCard"
                 onChange={this.onCardInputChange} />
        </div>
      </div>
    );
  }
}

BankCardComponent.propTypes = {
  bank: PropTypes.object.isRequired,
  deleteCardFromBank: PropTypes.func.isRequired,
  addCardToBank: PropTypes.func.isRequired
};

export default BankCardComponent;
