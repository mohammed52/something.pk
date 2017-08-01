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
var ButtonToolbar = ReactBootstrap.ButtonToolbar
var DropdownButton = ReactBootstrap.DropdownButton
var MenuItem = ReactBootstrap.MenuItem

var bootbox = require('bootbox');

const ENTER_KEY_CODE = 13;

class SingleBankDealRowComponent extends Component {
  constructor(props) {
    super(props)
    this.deleteDeal = this.deleteDeal.bind(this)
    this.updateDeal = this.updateDeal.bind(this)

    this.state = {
      bankDeals: [],
      bank: null
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

  updateDeal() {
    console.log("updateDeal");
  }


  render() {
    const {bank, citiesStr, restaurant, serialNumber, deal} = this.props

    const arrDivCardDeals = []
    const cardDeals = deal.cardDeals
    for (var i = 0; i < cardDeals.length; i++) {
      arrDivCardDeals.push(
        <div>
          {cardDeals[i].cardName + ": "}
          <input type="text"
                 defaultValue={cardDeals[i].deal} />
        </div>
      )
    }
    return (

      <tr>
        <td>
          {serialNumber}
        </td>
        <td>
          <div>
            {typeof restaurant.logoUrl === "undefined" ? <div>
                                                           no-image
                                                         </div> : <img src={restaurant.logoUrl}
                                                                       alt={restaurant.name}
                                                                       height="50"
                                                                       width="50" />}
          </div>
        </td>
        <td>
          <div>
            <strong>{restaurant.name}</strong>
            {cardDeals === "" ? <div></div> :
             <div>
               {arrDivCardDeals}
             </div>}
            <div>
              <br/>
              {"Standard Deal: "}
              <input type="text"
                     defaultValue={deal.generalDeal} />
            </div>
            <div>
              <br/>
              {citiesStr}
            </div>
          </div>
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
                  onClick={this.updateDeal}>
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
};

export default SingleBankDealRowComponent;
