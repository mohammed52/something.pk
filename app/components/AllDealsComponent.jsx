import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';
import { getRestaurant, getCities, getCardDeals } from './helpers/dealsDisplayHelpers'
import SingleBankDealRowComponent from './SingleBankDealRowComponent'

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

class AllDealsComponent extends Component {
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

    const {bank, restaurants, cities} = this.props

    const deals = this.props.deals.slice()

    deals.sort((a, b) => {
      const restaurantA = getRestaurant(a.restaurantId, restaurants)
      const restaurantB = getRestaurant(b.restaurantId, restaurants)

      const retVal = restaurantA.name > restaurantB.name

      return retVal
    })


    var trArrDeals = []

    if (bank !== null && deals.length !== 0 && restaurants !== 0 && cities !== 0) {
      for (var i = 0; i < deals.length; i++) {
        if (deals[i].bankId === this.props.bank._id) {
          const restaurant = getRestaurant(deals[i].restaurantId, restaurants)
          const citiesStr = getCities(deals[i].cities)
          const cardDeals = getCardDeals(deals[i].cardDeals, bank)
          trArrDeals.push(
            <SingleBankDealRowComponent deal={deals[i]}
                                        bank={this.props.bank}
                                        restaurant={restaurant}
                                        citiesStr={citiesStr}
                                        cardDeals={cardDeals}
                                        key={"trArrDeals" + i}
                                        serialNumber={trArrDeals.length + 1}
                                        destroyDeal={this.props.destroyDeal}
                                        updateDeals={this.props.updateDeals} />
          )
        }
      }
    }


    return (
      <div>
        {this.props.bank !== null ?
         <div>
           All Deals Here
           <div className="well">
             <table className="table">
               <tbody>
                 <tr>
                   <th>
                     S/N
                   </th>
                   <th>
                     Logo
                   </th>
                   <th>
                     Deals
                   </th>
                   <th>
                     Disabled
                   </th>
                   <th>
                     Actions
                   </th>
                 </tr>
                 {trArrDeals}
               </tbody>
             </table>
           </div>
         </div>
         :
         <div>
           Select Bank
         </div>}
      </div>
    );
  }
}

AllDealsComponent.propTypes = {
  bank: PropTypes.object.isRequired,
  deals: PropTypes.array.isRequired,
  restaurants: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,

  createDeal: PropTypes.func.isRequired,
  destroyDeal: PropTypes.func.isRequired,
};

export default AllDealsComponent;
