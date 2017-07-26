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

const ENTER_KEY_CODE = 13;

class SingleBankDealRowComponent extends Component {
  constructor(props) {
    super(props)
    // this.onBankSelected = this.onBankSelected.bind(this)
    // this.onSave = this.onSave.bind(this);
    // this.onKeyDown = this.onKeyDown.bind(this);
    // this.onCardInputChange = this.onCardInputChange.bind(this)
    this.state = {
      bankDeals: [],
      bank: null
    };
  }

  render() {
    const {bank, cardDeals, citiesStr, restaurant, serialNumber, deal} = this.props

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
               {cardDeals.split('\n').map((item, key) => {
                  return <span key={key}>{item}<br/></span>
                })}
             </div>}
            <div>
              {deal.generalDeal !== "" ?
               
               <div>
                 <br/>
                 {deal.generalDeal}
               </div>
               :
               <div>
               </div>}
            </div>
            <div>
              <br/>
              {citiesStr}
            </div>
          </div>
        </td>
        <td>
          Actions
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
