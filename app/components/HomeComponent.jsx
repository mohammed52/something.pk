import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { instanceOf } from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';
import { withCookies, Cookies } from 'react-cookie';
import SingleDealComponent from './SingleDealComponent'
import SettingsModal from './SettingsModal'

import styles from '../css/components/home';
import testStyles from '../css/components/test';
import { getRestaurant, getCities, getCardDeals, getBank } from './helpers/dealsDisplayHelpers'
import { bankIsEnabledInSettings } from './helpers/settingsHelpers'

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

// const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET
// const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_UPLOAD_URL

// const CLOUDINARY_UPLOAD_PRESET = 'somethingpk_default_preset';
// const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dk4gji43k/image/upload';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.setBankCards = this.setBankCards.bind(this)
    this.saveSettings = this.saveSettings.bind(this)
    this.closeSettingsModal = this.closeSettingsModal.bind(this)
    this.updateSettingsForBank = this.updateSettingsForBank.bind(this)
    this.updateSettingsForCities = this.updateSettingsForCities.bind(this)
    const banks = this.props.banks
    const cities = this.props.cities
    // const {cookies} = this.props



    var tmpBankCardSettings = null
    var tmpCitiesSettings = null
    //check if not on server
    if (typeof (Storage) !== "undefined") {
      //use the local storage
      tmpBankCardSettings = JSON.parse(localStorage.getItem("banksCardsSettings"));
      tmpCitiesSettings = JSON.parse(localStorage.getItem("citiesSettings"));
    }


    // var tmpBankCardSettings = null

    if (tmpBankCardSettings == null) {
      tmpBankCardSettings = []

      for (var i = 0; i < banks.length; i++) {
        var cardsSettings = []
        const bankName = banks[i].fullName
        if (banks[i].cards.length !== 0) {
          const cards = banks[i].cards
          for (var j = 0; j < cards.length; j++) {
            if (j === 0) {

              cardsSettings.push({
                cardName: cards[j],
                enabled: true
              })
            } else {
              cardsSettings.push({
                cardName: cards[j],
                enabled: false
              })

            }

          }
        } else {
          cardsSettings.push({
            cardName: bankName + "(Any Card)",
            enabled: true
          })
        }

        tmpBankCardSettings.push({
          bank: banks[i],
          bankEnabled: true,
          cardsSettings
        })
      }
    }

    if (tmpCitiesSettings == null) {

      tmpCitiesSettings = []


      for (var k = 0; k < cities.length; k++) {

        var tmpCitySetting

        if (cities[k].name === 'Karachi') {
          tmpCitySetting = {
            name: cities[k].name,
            enabled: true
          }
        } else {
          tmpCitySetting = {
            name: cities[k].name,
            enabled: false
          }
        }
        tmpCitiesSettings.push(tmpCitySetting)
      }
    }

    this.state = {
      banksCardsSettings: tmpBankCardSettings,
      showSettingsModal: false,
      citiesSettings: tmpCitiesSettings
    };
  }

  setBankCards() {
    this.setState({
      showSettingsModal: true
    })
  }

  saveSettings() {
    console.log("saveSettings");
    this.setState({
      showSettingsModal: false
    })
    const {cookies} = this.props;
    const settingsCookie = this.state.banksCardsSettings

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 365);
    localStorage.setItem('banksCardsSettings', JSON.stringify(settingsCookie));


  }

  closeSettingsModal() {
    this.setState({
      showSettingsModal: false
    })
  }

  updateSettingsForBank(newCardSettings, bankId) {
    const banksCardsSettings = this.state.banksCardsSettings
    for (var i = 0; i < banksCardsSettings.length; i++) {
      if (banksCardsSettings[i].bank.id === bankId) {

        banksCardsSettings[i].cardsSettings = newCardSettings

        var tmpBankEnabled = false
        for (var j = 0; j < newCardSettings.length; j++) {
          if (newCardSettings[j].enabled === true) {
            tmpBankEnabled = true
          }
        }
        banksCardsSettings[i].bankEnabled = tmpBankEnabled
        break
      }
    }

    this.setState({
      banksCardsSettings
    })
  }

  updateSettingsForCities(newCitiesSettings) {
    console.log("updateSettingsForCities");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillMount() {
    console.log("componentWillMount");

  }



  render() {

    const {deals, restaurants, banks, cities} = this.props
    const arrDealsDivs = []

    if (deals !== null && restaurants !== null && banks !== null && cities !== null && this.state.banksCardsSettings !== null && banks.length !== 0) {
      for (var i = 0; i < deals.length; i++) {
        const restaurant = getRestaurant(deals[i].restaurantId, restaurants)
        const cities = getCities(deals[i].cities)
        const bank = getBank(deals[i].bankId, banks)
        if (bankIsEnabledInSettings(bank, this.state.banksCardsSettings)) {

          arrDealsDivs.push(
            <SingleDealComponent key={"arrDealsDivs" + i}
                                 deal={deals[i]}
                                 restaurant={restaurant}
                                 bank={bank}
                                 cities={cities}
                                 banksCardsSettings={this.state.banksCardsSettings} />
          )
        }

      }
    }

    return (
      <div className={[styles.homeWrapper].join(' ')}>
        <br/>
        <div>
          {"BETA - have a feature in mind for this website? talk to me, let me buy you a drink :) "}
        </div>
        <Button bsStyle="primary"
                onClick={this.setBankCards}
                disabled={false}
                bsSize="xsmall">
          Set Banks/Cards
        </Button>
        <br/>
        <br/>
        <table className={[styles.dealsTable].join(' ')}>
          <tbody>
            {arrDealsDivs}
          </tbody>
        </table>
        <SettingsModal onHide={this.closeSettingsModal}
                       show={this.state.showSettingsModal}
                       saveSettings={this.saveSettings}
                       banks={this.props.banks}
                       banksCardsSettings={this.state.banksCardsSettings}
                       updateSettingsForBank={this.updateSettingsForBank}
                       updateSettingsForCities={this.updateSettingsForCities}
                       cities={this.props.cities} />
      </div>

    );
  }
}

HomeComponent.propTypes = {
  deals: PropTypes.array.isRequired,
  banks: PropTypes.array.isRequired,
  restaurants: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,

  cookies: instanceOf(Cookies).isRequired

};

export default withCookies(HomeComponent);
