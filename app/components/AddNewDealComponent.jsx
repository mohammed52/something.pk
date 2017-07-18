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

class AddNewDealComponent extends Component {
  constructor(props) {
    super(props)
    this.onRestaurantSelected = this.onRestaurantSelected.bind(this)
    this.onChangeCardDeal = this.onChangeCardDeal.bind(this)
    this.onChangeStandardDeal = this.onChangeStandardDeal.bind(this)

    this.state = {
      restaurant: null,
      defaultCardDeal: "15% Off on the menu",
      standardDeal: "",
      cardDeals: []
    };
  }

  onChangeCardDeal(refName, event) {
    console.log("event", event);
    console.log("value", event.target.value);
    console.log("refName", refName);
    let tmpArrCardDeals = this.state.cardDeals
    tmpArrCardDeals[Number(refName.charAt(0))] = event.target.value
    this.setState({
      cardDeals: tmpArrCardDeals
    })


  }

  onRestaurantSelected(eventKey, event) {
    console.log("onRestaurantSelected")
    const restaurants = this.props.restaurants
    console.log(restaurants[eventKey - 1].name)
    this.setState({
      restaurant: restaurants[eventKey - 1].name
    })
  }

  onChangeStandardDeal(event) {
    console.log("event.target.value", event.target.value);
    this.setState({
      standardDeal: event.target.value
    })
  }

  render() {
    if (this.props.bank === null) {
      return (
        <div>
          bank is null
        </div>
      )
    } else {
      //filter deals for the bank
      const {bank, deals, restaurants, cities} = this.props
      const arrRestaurantsDropdown = []
      for (let i = 0; i < restaurants.length; i++) {
        const restaurant = restaurants[i]
        console.log("restaurant.name", restaurant.name);
        arrRestaurantsDropdown.push(
          <MenuItem key={"arrRestaurantsDropdown" + i} eventKey={i + 1} onSelect={this.onRestaurantSelected}>
            {restaurant.name}
          </MenuItem>

        )

      }

      // load cards deals input array
      const cards = bank.cards;
      const arrCardsDealsInput = [];

      for (var i = 0; i < cards.length; i++) {
        arrCardsDealsInput.push(
          <div key={"arrCardsDealsInput" + i}>
            <strong>{cards[i] + " Deal: "}</strong>
            <input onChange={this.onChangeCardDeal.bind(this, i + 'refCard')} defaultValue={this.state.defaultCardDeal} />
            <br/>
            <br/>
          </div>
        )
      }

      return (
        <div>
          Add New Deal Component bank is not null
          <div className="well">
            <div>
              <span><strong>{"Bank Name: "}</strong></span>
              {this.props.bank.fullName}
            </div>
            <br/>
            <div>
              <strong>{"Select Restaurant: "}</strong>
              <ButtonToolbar>
                <DropdownButton title={(this.state.restaurant === null ? "Select Restaurant" : this.state.restaurant)} id="dropdown-size-medium">
                  {arrRestaurantsDropdown}
                </DropdownButton>
              </ButtonToolbar>
              <br/>
              {arrCardsDealsInput}
              <strong>{"Standard Deal: "}</strong>
              <input onChange={this.onChangeStandardDeal} defaultValue=" 40% off on Fridays" />
              <br/>
              <Button bsStyle="primary">
                Create Deal
              </Button>
            </div>
          </div>
        </div>
        );
    }
  }
}

AddNewDealComponent.propTypes = {
  bank: PropTypes.object.isRequired,
  deals: PropTypes.array.isRequired,
  restaurants: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
};

export default AddNewDealComponent;
