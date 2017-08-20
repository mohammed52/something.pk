import React, { Component } from 'react';
import PropTypes from 'prop-types';
// cloudinary preset somethingpk_default_preset
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from "jquery"
import classNames from 'classnames/bind';
import SingleDealComponent from './SingleDealComponent'
import SettingsModal from './SettingsModal'

import testStyles from '../css/components/test';
import { getRestaurant, getCities, getCardDeals, getBank } from './helpers/dealsDisplayHelpers'

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

// const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET
// const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_UPLOAD_URL

const CLOUDINARY_UPLOAD_PRESET = 'somethingpk_default_preset';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dk4gji43k/image/upload';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.setBankCards = this.setBankCards.bind(this)
    this.saveSettings = this.saveSettings.bind(this)
    this.closeSettingsModal = this.closeSettingsModal.bind(this)

    this.state = {
      uploadedRestaurantLogo: null,
      uploadedRestaurantLogoCloudinaryUrl: '',
      restaurantNameField: "",
      showSettingsModal: true
    };
  }

  setBankCards() {
    console.log("setBankCards");
  }

  saveSettings() {
    console.log("saveSettings");
  }

  closeSettingsModal() {
    console.log("closeSettingsModal");
  }

  render() {
    const {deals, restaurants, banks, cities} = this.props
    const arrDealsDivs = []

    if (deals !== null && restaurants !== null && banks !== null && cities !== null) {
      for (var i = 0; i < deals.length; i++) {
        const restaurant = getRestaurant(deals[i].restaurantId, restaurants)
        const cities = getCities(deals[i].cities)
        const bank = getBank(deals[i].bankId, banks)
        arrDealsDivs.push(
          <SingleDealComponent key={"arrDealsDivs" + i}
                               deal={deals[i]}
                               restaurant={restaurant}
                               bank={bank}
                               cities={cities} />
        )

      }
    }

    return (
      <div>
        <br/> BETA - have a feature in mind for this website? talk to me, let me buy you a drink :)
        <Button bsStyle="primary"
                onClick={this.setBankCards}
                disabled={false}>
          Set Banks/Cards
        </Button>
        <br/>
        <br/>
        <table className="table">
          <tbody>
            {arrDealsDivs}
          </tbody>
        </table>
        <SettingsModal onHideSettingsModal={this.closeSettingsModal}
                       showSettingsModal={this.state.showSettingsModal}
                       onSaveSettings={this.saveSettings} />
      </div>
    );
  }
}

HomeComponent.propTypes = {
  deals: PropTypes.array.isRequired,
  banks: PropTypes.array.isRequired,
  restaurants: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired
};

export default HomeComponent;
