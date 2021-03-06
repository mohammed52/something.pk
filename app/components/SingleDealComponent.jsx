import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';
import { getRestaurant, getCities, getCardDeals } from './helpers/dealsDisplayHelpers'
import { cardEnabledInSettings } from './helpers/settingsHelpers'
import styles from '../css/components/home';
import testStyles from '../css/components/test';
// const cx = classNames.bind(styles);
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const cxTest = classNames.bind(testStyles);

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

class SingleDealComponent extends Component {
  // constructor(props) {
  //   super(props)
  //   this.deleteDeal = this.deleteDeal.bind(this)
  //   this.updateDeals = this.updateDeals.bind(this)
  //   this.onChangeCardDeal = this.onChangeCardDeal.bind(this)
  //   this.onChangeGeneralDeal = this.onChangeGeneralDeal.bind(this)
  //   this.onChangeCheckBoxGroup = this.onChangeCheckBoxGroup.bind(this)
  //   this.handleChangeExpiry = this.handleChangeExpiry.bind(this)
  //   this.onChangeDisabledCheckbox = this.onChangeDisabledCheckbox.bind(this)

  //   this.state = {
  //     bankCardDeals: this.props.deal.cardDeals,
  //     generalDeal: this.props.deal.generalDeal,
  //     expiry: this.props.deal.expiry,
  //     disabled: this.props.deal.disabled
  //   };
  // }

  render() {
    const {bank, restaurant, deal, cities, banksCardsSettings} = this.props

    const arrCardDealsDivs = []
    for (var i = 0; i < deal.cardDeals.length; i++) {
      if (deal.cardDeals[i].cardName !== ""
        && deal.cardDeals[i].deal !== ""
        && cardEnabledInSettings(deal.cardDeals[i].cardName, bank, banksCardsSettings)) {

        arrCardDealsDivs.push(
          <div key={"arrCardDealsDivs" + i}>
            {deal.cardDeals[i].cardName + ": "}
            <strong>{deal.cardDeals[i].deal}</strong>
          </div>
        )
      }

    }



    return (
      <tr className={[styles.trSingleDealRow].join(' ')}>
        <td className={[styles.tdLogo].join(' ')}>
          <div className={[styles.restaurantWrapper].join(' ')}>
            {typeof restaurant.logoUrl === null ? <div>
                                                    no-image
                                                  </div> : <img src={restaurant.logoUrl}
                                                                alt={restaurant.name}
                                                                className={[styles.restaurantLogo].join(' ')} />}
          </div>
        </td>
        <td className={[styles.tdCenterCol].join(' ')}>
          <div className={styles.textRestaurantName}>
            <strong>{restaurant.name}</strong>
          </div>
          <div className={styles.textCardDeal}>
            {arrCardDealsDivs}
          </div>
          <div className={styles.textStandardDeal}>
            {deal.generalDeal}
          </div>
          <br/>
          <div className={styles.textCities}>
            <strong>{cities}</strong>
          </div>
        </td>
        <td className={[styles.tdBank].join(' ')}>
          <div className={[styles.bankLogoWrapper].join(' ')}>
            {typeof bank.logoUrl === "undefined" ? <div>
                                                     no-image
                                                   </div> : <img src={bank.logoUrl}
                                                                 alt={bank.name}
                                                                 className={[styles.bankLogo].join(' ')} />}
            <div className={styles.textBankName}>
              <strong>{bank.fullName}</strong>
            </div>
          </div>
        </td>
      </tr>

    );
  }
}

SingleDealComponent.propTypes = {
  bank: PropTypes.object.isRequired,
  deal: PropTypes.object.isRequired,
  restaurant: PropTypes.object.isRequired,
  cities: PropTypes.string.isRequired,
};

export default SingleDealComponent;
