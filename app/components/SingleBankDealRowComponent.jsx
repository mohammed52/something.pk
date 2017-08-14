import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';
import { getRestaurant, getCities, getCardDeals } from './helpers/dealsDisplayHelpers'

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
var Checkbox = ReactBootstrap.Checkbox
var ButtonToolbar = ReactBootstrap.ButtonToolbar
var DropdownButton = ReactBootstrap.DropdownButton
var MenuItem = ReactBootstrap.MenuItem

var DatePicker = require("react-bootstrap-date-picker");

var bootbox = require('bootbox');

const ENTER_KEY_CODE = 13;

class SingleBankDealRowComponent extends Component {
  constructor(props) {
    super(props)
    this.deleteDeal = this.deleteDeal.bind(this)
    this.updateDeals = this.updateDeals.bind(this)
    this.onChangeCardDeal = this.onChangeCardDeal.bind(this)
    this.onChangeGeneralDeal = this.onChangeGeneralDeal.bind(this)
    this.onChangeCheckBoxGroup = this.onChangeCheckBoxGroup.bind(this)
    this.handleChangeExpiry = this.handleChangeExpiry.bind(this)
    this.onChangeDisabledCheckbox = this.onChangeDisabledCheckbox.bind(this)

    this.state = {
      bankCardDeals: this.props.deal.cardDeals,
      generalDeal: this.props.deal.generalDeal,
      expiry: this.props.deal.expiry,
      disabled: this.props.deal.disabled
    };
  }

  deleteDeal() {

    const deleteQuoteMessage = "Do you want to delete deal? This cannot be undone."
    bootbox.confirm({
      title: "Delete Deal?",
      message: deleteQuoteMessage,
      buttons: {
        cancel: {
          label: '<i class="fa fa-times"></i> Cancel',
          className: 'btn-default'
        },
        confirm: {
          label: '<i class="fa fa-check"></i> Delete',
          className: 'btn-danger'
        }
      },
      callback: function(result) {
        const MAPLOG = true
        if (result === true) {

          console.log("delete");
          const deal = this.props.deal
          const {destroyDeal} = this.props

          destroyDeal(deal.id)

        } else {
          console.log("result", result)
        }
      }.bind(this)
    });



  }

  updateDeals() {
    console.log("updateDeals");
    var tmpDeal = this.props.deal
    tmpDeal.cardDeals = this.state.bankCardDeals
    tmpDeal.generalDeal = this.state.generalDeal
    tmpDeal.expiry = this.state.expiry
    console.log("tmpDeal", tmpDeal);

    const updateDeals = this.props.updateDeals
    updateDeals(this.props.deal, this.state.bankCardDeals, this.state.generalDeal, this.state.expiry, this.state.disabled)


  }

  onChangeCheckBoxGroup(refName, event) {
    console.log("onChangeCheckBoxGroup");
  }

  onChangeCardDeal(refName, event) {
    //refName is the card name starting with index
    // console.log("cardName", refName);
    // console.log("event.target.value", event.target.value);

    var cardDeals = this.state.bankCardDeals
    const index = Number(refName.charAt(0))
    cardDeals[index].deal = event.target.value
    this.setState({
      bankCardDeals: cardDeals
    })
  }

  onChangeGeneralDeal(event) {
    this.setState({
      generalDeal: event.target.value
    })
  }

  handleChangeExpiry(selectedDate, formattedValue) {
    this.setState({
      expiry: selectedDate, // ISO String, ex: "2016-11-19T12:00:00.000Z" 
      formattedValue // Formatted String, ex: "11/19/2016" 
    });

  }

  onChangeDisabledCheckbox(event) {
    console.log("onChangeDisabledCheckbox");
    this.setState({
      disabled: !this.state.disabled
    })
  }

  render() {
    const {bank, citiesStr, restaurant, serialNumber, deal} = this.props

    const arrDivCardDeals = []
    const cardDeals = deal.cardDeals
    for (var i = 0; i < cardDeals.length; i++) {
      arrDivCardDeals.push(
        <div key={"arrDivCardDeals" + i}>
          {cardDeals[i].cardName + ": "}
          <input type="text"
                 defaultValue={cardDeals[i].deal}
                 onChange={this.onChangeCardDeal.bind(this, i + cardDeals[i].cardName)} />
        </div>
      )
    }

    return (

      <tr>
        <td>
          {serialNumber}
        </td>
        <td>
          <div className="row">
            <div className="col-xs-6">
              <div>
                {typeof restaurant.logoUrl === "undefined" ? <div>
                                                               no-image
                                                             </div> : <img src={restaurant.logoUrl}
                                                                           alt={restaurant.name}
                                                                           height="50"
                                                                           width="50" />}
              </div>
            </div>
            <div className="col-xs-6">
              <div>
                <strong>{restaurant.name}</strong>
                <br/>
                {citiesStr}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <ControlLabel>
                {"Deal Expiry: "}
              </ControlLabel>
            </div>
            <div className="col-xs-6">
            </div>
          </div>
          <span><DatePicker id="example-datepicker"
                            value={this.state.expiry}
                            onChange={this.handleChangeExpiry}
                            width="200px"/></span>
        </td>
        <td>
          <div>
            {cardDeals === "" ? <div></div> :
             <div>
               {arrDivCardDeals}
             </div>}
            <div>
              <br/>
              {"Standard Deal: "}
              <input type="text"
                     defaultValue={deal.generalDeal}
                     onChange={this.onChangeGeneralDeal} />
            </div>
            <div>
              <br/>
            </div>
          </div>
        </td>
        <td>
          <Checkbox inline
                    onChange={this.onChangeDisabledCheckbox}
                    checked={this.state.disabled}>
          </Checkbox>
        </td>
        <td>
          <button className="btn btn-link"
                  type="button"
                  onClick={this.deleteDeal}>
            <i className="fa fa-trash-o"
               aria-hidden="true" />
          </button>
          <button className="btn btn-link"
                  type="button"
                  onClick={this.updateDeals}>
            <i className="fa fa-floppy-o"
               aria-hidden="true" />
          </button>
        </td>
      </tr>
    );
  }
}

SingleBankDealRowComponent.propTypes = {
  bank: PropTypes.object.isRequired,
  deal: PropTypes.object.isRequired,
  cardDeals: PropTypes.string.isRequired,
  citiesStr: PropTypes.string.isRequired,
  restaurant: PropTypes.object.isRequired,
  serialNumber: PropTypes.number.isRequired,

  destroyDeal: PropTypes.func.isRequired,
  updateDeals: PropTypes.func.isRequired
};

export default SingleBankDealRowComponent;
